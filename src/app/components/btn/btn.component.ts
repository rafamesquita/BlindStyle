import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.scss'
})
export class BtnComponent {

  @Input() label: string = ''
  @Input() from: string = ''

  constructor(private router: Router) {}

  goTo(){
    if(this.label=='Histórico')
    this.router.navigate(['/historico']);
    if(this.label=='Câmera')
    this.router.navigate(['/camera']);
  }
}
