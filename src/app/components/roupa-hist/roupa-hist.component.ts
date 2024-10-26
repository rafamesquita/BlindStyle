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

  @Input() roupa: string = ''
  jaqueta: boolean = false
  calca: boolean = false
  blusa: boolean = false
  vestido: boolean = false

  ngOnInit() {
    switch (this.roupa) {
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
}
