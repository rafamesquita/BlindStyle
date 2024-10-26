import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { RoupaHistComponent } from '../../components/roupa-hist/roupa-hist.component';

@Component({
  selector: 'app-historico',
  standalone: true,
  imports: [HeaderComponent, RoupaHistComponent],
  templateUrl: './historico.component.html',
  styleUrl: './historico.component.scss'
})
export class HistoricoComponent {

}
