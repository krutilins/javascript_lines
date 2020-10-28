import { HTMLElement } from "../../HTML/HTMLElement/HTMLElement";

export class Scoreboard {
  constructor(app) {
    this._app = app;
  }

  initScoreboardIn() {
    
    const scoreboard = new HTMLElement('div', 'scoreboard');
    scoreboard.drawAdjacent('beforeend', this._app.HTMLElement);
     
    this._score = new HTMLElement('div', 'scoreboard__score')
      .drawAdjacent('beforeend', scoreboard.HTMLElement);
    this._recored = new HTMLElement('div', 'scoreboard__recored')
      .drawAdjacent('beforeend', scoreboard.HTMLElement);

    this.update();
  
  }

  update() {
    this._recored.setText(`${'recored'}: ${Number(localStorage.getItem('recored')) || 0}`);
    this._score.setText(`${'score'}: ${Number(localStorage.getItem('score')) || 0}`)
  }

}