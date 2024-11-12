import { Component, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camera',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.scss'
})
export class CameraComponent implements AfterViewInit {

  @ViewChild('videoElement') videoElement: ElementRef<HTMLVideoElement> | undefined;

  isCameraActive = false;  // Para controlar se a câmera está ativa
  errorMessage: string | null = null;

  constructor() {}

  ngAfterViewInit(): void {
    // Verificar se o elemento de vídeo está sendo referenciado corretamente
    console.log(this.videoElement);
  }

  //Solicitar acesso à câmera
  startCamera(): void {
    this.errorMessage = null;

    // Verificar se o navegador suporta a API de getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Verifica se o vídeo foi encontrado
          if (this.videoElement) {
            this.videoElement.nativeElement.srcObject = stream;
            this.isCameraActive = true;  // Marca a câmera como ativa
          }
        })
        .catch((error) => {
          // Exibe a mensagem de erro, se algo der errado
          this.isCameraActive = false;
          this.errorMessage = 'Não foi possível acessar a câmera. Erro: ' + error.message;
        });
    } else {
      this.errorMessage = 'Seu navegador não suporta acesso à câmera.';
    }
  }

  // Método para parar a câmera
  stopCamera(): void {
    this.errorMessage = null;
    if (this.videoElement && this.videoElement.nativeElement.srcObject) {
      const stream = this.videoElement.nativeElement.srcObject as MediaStream;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      this.videoElement.nativeElement.srcObject = null;
      this.isCameraActive = false;
    }
  }
}
