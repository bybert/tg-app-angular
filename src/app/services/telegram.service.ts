import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

interface TgButton {
  show(): void
  hide(): void
  setText(text): void
  onClick(fn: Function): void
  offClick(fn: Function): void

}

@Injectable({
  providedIn: 'root'
})
export class TelegramService {
  private window;
  tg;
  constructor(@Inject(DOCUMENT) private _document) { 
    this.window = this._document.defaultView
    this.tg = this.window.Telegram.WebApp
  }

  get MainButton(): TgButton {
    return this.tg.MainButton
  }

  get BackButton(): TgButton {
    return this.tg.BackButton
  }

  ready() {
    this.tg.ready()
  }
}