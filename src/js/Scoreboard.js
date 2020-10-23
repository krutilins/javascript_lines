export class Scoreboard {
  constructor(selector, context) {
    this.board = document.querySelector(selector);
    this.context = context;
  }
  
  bindWithElement(selector) {
    let app = document.querySelector(selector);
    app.addEventListener('click', this._updateBoard.bind(this))
    this._updateBoard();
  }

  _updateBoard() {    
    let recored = document.createElement('div');
    recored.classList.add('scoreboard__title');
    recored.innerText = `Recored: ${this.context.recored}`;
  
    let score = document.createElement('div');
    score.classList.add('scoreboard__title');
    score.innerText = `Score: ${this.context.score}`;
    
    this.board.children[0].replaceWith(score);
    this.board.children[1].replaceWith(recored);
  }
}