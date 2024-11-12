import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-roupa-hist',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './roupa-hist.component.html',
  styleUrl: './roupa-hist.component.scss'
})
export class RoupaHistComponent implements OnInit{

  @Input() data: any
  jaqueta: boolean = false
  calca: boolean = false
  blusa: boolean = false
  vestido: boolean = false

  ngOnInit() {
    switch (this.data.nome) {
      case "jaqueta":
        this.jaqueta = true;
        break;
      case "calca":
        this.calca = true;
        break;
      case "blusa":
        this.blusa = true;
        break;
      case "vestido":
        this.vestido = true;
        break;
    }   
  }

  openImg(base64: string, contentType: string = 'image/jpg') {
    const byteCharacters = atob(base64);
    const byteNumbers = Array.from(byteCharacters).map(char => char.charCodeAt(0));
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: contentType }); // Cria o Blob corretamente
    this.displayImageFromBlob(blob); // Passa a instância de Blob para o método
  }

  displayImageFromBlob(blob: Blob) { // Define o tipo como Blob
    const imageUrl = URL.createObjectURL(blob);
    const imgElement = document.createElement('img');
    imgElement.src = imageUrl;
    imgElement.alt = "Imagem Decodificada";
    imgElement.style.maxWidth = "50%";
    imgElement.style.height = "150px";
    const container = document.getElementById('imageContainer');
    if (container) {
        container.appendChild(imgElement);
    } else {
        console.error("Elemento com ID 'imageContainer' não encontrado.");
    }
  }
}
