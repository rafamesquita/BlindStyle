import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HistoricoComponent } from './pages/historico/historico.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

export const routes: Routes = [
    { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro', component: CadastroComponent },
    { path: 'historico', component: HistoricoComponent },
];