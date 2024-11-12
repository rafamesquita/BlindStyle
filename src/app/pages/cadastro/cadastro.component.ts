import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router } from '@angular/router';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  
  constructor(private router: Router) {}

  home(){
    this.router.navigate(['/home']);
  }

  login(){
    this.router.navigate(['/login']);
  }
}
