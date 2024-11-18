import { Component, ViewChild, ElementRef, AfterViewInit, Injectable } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import { BtnComponent } from "../../components/btn/btn.component";


@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [HeaderComponent, CommonModule, BtnComponent],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss'
})
export class GaleriaComponent {

  @ViewChild('fileInput') fileInput!: ElementRef;

  selectedImage: string | null = null;
  imageBase64: string | null = null;

  // Abre a galeria ao clicar no botão
  openGallery(): void {
    this.fileInput.nativeElement.click();
  }

  // Manipula a seleção da imagem
  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  // Converte a imagem selecionada para Base64
  convertToBase64(): void {
    if (this.selectedImage) {
      this.imageBase64 = this.selectedImage;
      console.log('Imagem em Base64:', this.imageBase64);
    }
  }
}

