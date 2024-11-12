import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError, switchMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    let authReq = request;

    if (accessToken) {
      authReq = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    }

    return next.handle(authReq).pipe(
      catchError((error) => {
        if (error.status === 401) {
          // Token expirado, tenta usar o refresh token
          return this.authService.refreshAccessToken().pipe(
            switchMap((response) => {
              if (response && response.access_token) {
                // Refaz a requisição original com o novo access token
                const newAccessToken = response.access_token;
                const clonedRequest = request.clone({
                  setHeaders: {
                    Authorization: `Bearer ${newAccessToken}`,
                  },
                });
                return next.handle(clonedRequest);
              }
              // Caso o refresh token também tenha expirado, logout do usuário
              this.authService.logout();
              return of(error);
            })
          );
        }
        return of(error);
      })
    );
  }
}

export const authInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
