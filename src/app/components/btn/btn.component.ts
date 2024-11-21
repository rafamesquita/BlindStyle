import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TextToSpeechService } from './../../services/text-speech/text-to-speech.service';

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

  constructor(
    private router: Router,
    private ttsService: TextToSpeechService,
  ) {}

  goTo(){
    if(this.label=='History')
    this.router.navigate(['/historico']);
    if(this.label=='Camera')
    this.router.navigate(['/camera']);
    if(this.label=='Gallery')
      this.router.navigate(['/galeria']);
  }

  onSpeak(text: string): void {
    this.ttsService.speak(text);
  }

}
