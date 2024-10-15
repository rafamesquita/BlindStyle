import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { BtnComponent } from "../../components/btn/btn.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, BtnComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
