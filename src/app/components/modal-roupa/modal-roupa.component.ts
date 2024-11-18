import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-modal-roupa',
  standalone: true,
  imports: [],
  templateUrl: './modal-roupa.component.html',
  styleUrl: './modal-roupa.component.scss'
})
export class ModalRoupaComponent implements OnInit{
  @Input() data: any
  
  constructor(private ApiService: ApiService) {}

  clothe: any

  ngOnInit(): void {
    this.getSpecificClothe();
    this.convertBase64ToJpg(this.data.image_url);
  }

  getSpecificClothe() {
    this.ApiService.getSpecificClothe(this.data.id).subscribe({
      next: (res)=>{
        this.clothe = res
        console.log(this.clothe)
      },
      error: (error)=>{
        console.error(error)
      }
    })
  }

  convertBase64ToJpg(base64Data: string): void {
    // Remove o prefixo "data:image/png;base64," ou similar
    const base64Content = base64Data.replace(/^data:image\/\w+;base64,/, '');
  
    // Converte o conteúdo Base64 para um Blob
    const byteCharacters = atob(base64Content);
    const byteNumbers = new Array(byteCharacters.length).fill(null).map((_, i) => byteCharacters.charCodeAt(i));
    const byteArray = new Uint8Array(byteNumbers);
  
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
  }
  
}
