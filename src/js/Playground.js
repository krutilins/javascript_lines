import { Utils } from "./Utils";

const ZERO = 0;

export class Playground{
  constructor(rows, columns, ballsCount, ...colors) {
    this.rows = rows;
    this.columns = columns;
    this.ballsCount = ballsCount;
    this.colors = colors;
    this._drawCells();
    this._generateBalls();
  }

  _drawCells() {
    this.playground = document.querySelector('.playground');
    this.playgroundCells = [];
    for (let i = 0; i < this.columns; i++) {
      this.playgroundCells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        let newCell = document.createElement('div');
        newCell.classList.add('playground__cell');
        this.playground.insertAdjacentElement('beforeend', newCell);
        this.playgroundCells[i].push(newCell);
      }
    }
    this.playground.addEventListener('click', this._playgroundInteraction.bind(this));
  }

  _findWave(element) {
    let matrix = [];

    let fromX = null;
    let fromY = null;
    let toX = null;
    let toY = null;
    for (let i = 0; i < this.rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.columns; j++) {
        if (this.playgroundCells[i][j].firstElementChild) {
          matrix[i][j] = -2;
        } else {
          matrix[i][j] = -1;
        }
        if (this.playgroundCells[i][j] == this._selectedCell) {
          fromX = i;
          fromY = j;
        }
        if (this.playgroundCells[i][j] == element) {
          toX = i;
          toY = j;
        }
      }
    }

    let next = true;
    let step = 0;
    matrix[fromX][fromY] = step;
    while (next == true) {
      for (let x = 0; x < this.rows; x++) {
        for (let y = 0; y < this.columns; y++) {
          if (matrix[x][y] == step) {
            // to right
            if (x + 1 < this.rows && matrix[x + 1][y] == -1) {
              matrix[x + 1][y] = step + 1;
            }
            // to left
            if (x - 1 >= 0 && matrix[x - 1][y] == -1) {
              matrix[x - 1][y] = step + 1;
            }
            // to up
            if (y + 1 < this.columns && matrix[x][y + 1] == -1) {
              matrix[x][y + 1] = step + 1;
            }
            // to down
            if (y - 1 >= 0 && matrix[x][y - 1] == -1) {
              matrix[x][y - 1] = step + 1;
            }
          }
        }
      }
      if (matrix[toX][toY] == step || step > this.rows * this.columns) {
        next = false;
      } else {
        step++;
      }
    }

    if (matrix[toX][toY] == step) {
      let result = [];
      while (step != 0) {
        if (toX + 1 < this.rows && matrix[toX][toY] - matrix[toX + 1][toY] == 1) {
          // to right
          toX = toX + 1;
          result.unshift([toX, toY]);
        } else if (toX - 1 >= 0 && matrix[toX][toY] - matrix[toX - 1][toY] == 1) {
          // to left
          toX = toX - 1;
          result.unshift([toX, toY]);
        } else if (toY + 1 < this.columns && matrix[toX][toY] - matrix[toX][toY + 1] == 1) {
          // to up
          toY = toY + 1;
          result.unshift([toX, toY]);
        } else if (toY - 1 >= 0 && matrix[toX][toY] - matrix[toX][toY - 1] == 1) {
          // to down
          toY = toY - 1;
          result.unshift([toX, toY]);
        }
        step--;
      }
      return result;
    } else {
      return [];
    }    
  }

  _generateBalls() {
    let emptyCells = document.querySelectorAll('.playground__cell:empty');
    let cellsForFilling = Utils.generateUniqueNumbers(this.ballsCount, ZERO, emptyCells.length);
    if (cellsForFilling !== undefined) {
      cellsForFilling.forEach((item) => {
        let ball = document.createElement('div');
        ball.classList.add(`playground__ball_${this.colors[Utils.randomInteger(0, this.colors.length)]}`);
        emptyCells[item].insertAdjacentElement('beforeend', ball);
      })
    }
  }

  _playgroundInteraction(event) {
    let element = event.target;
    if (!element.classList.contains('playground')) {
      if (!element.classList.contains('playground__cell')) {
        element = element.parentElement;
      }
      if (element.firstElementChild) {
        if (this._selectedCell) {
          this._selectedCell.classList.remove('playground__cell_selected');
        }
        element.classList.add('playground__cell_selected');
        this._selectedCell = element;
      } else if (this._selectedCell) {
        let way = this._findWave(element);
        if (way.length) {
          element.insertAdjacentElement('beforeend', this._selectedCell.firstElementChild);
          this._selectedCell.classList.remove('playground__cell_selected')
          this._selectedCell = element.firstElementChild;
          this._generateBalls();
        }
      }
    }
  }
}