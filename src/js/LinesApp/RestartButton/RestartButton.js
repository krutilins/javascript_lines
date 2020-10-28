import { HTMLElement } from "../../HTML/HTMLElement/HTMLElement";

export class RestartButton {
  constructor(app) {
    this._app = app;
  }

  initRestartButton() {
    const restartButton = new HTMLElement('div', 'restart-btn');
    restartButton.drawAdjacent('beforeend', this._app.HTMLElement);
    
    new HTMLElement('button', 'restart-btn__button')
      .drawAdjacent('beforeend', restartButton.HTMLElement)
      .setText('new game');
  }
}