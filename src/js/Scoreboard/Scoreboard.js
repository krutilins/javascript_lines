import { HTMLElement } from "../HTMLElement/HTMLElement";

export class Scoreboard extends HTMLElement {
  constructor(parentSelector, context, ...classList) {
    super('div', parentSelector, ...classList);
    this.context = context;
  }

  draw(position) {
    super.draw(position);
    this.score = document.createElement('div');
    this.score.classList.add('scoreboard__score');

    this.recored = document.createElement('div');
    this.recored.classList.add('scoreboard__recored');

    this._$.insertAdjacentElement('beforeend', this.score);
    this._$.insertAdjacentElement('beforeend', this.recored);

    this.update();
  }
  
  // bindWithElement(context) {
  //   const app = document.querySelector(this._parentSelector);
  //   app.addEventListener('storage', this.update.bind(this))
  //   this.context = context;
  //   this.update();
  // }

  update() {    
    this.recored.innerText = `Recored: ${this.context.recored}`;
  
    this.score.innerText = `Score: ${this.context.score}`;
  }
}