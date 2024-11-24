import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TextToSpeechService {
  private synth = window.speechSynthesis;

  speak(text: string): void {
    if (this.synth.speaking) {
      console.error('Speech synthesis is already in progress.');
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    this.synth.speak(utterance);
  }
}
