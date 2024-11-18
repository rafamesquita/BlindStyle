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
}
