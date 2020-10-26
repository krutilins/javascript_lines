import { Grid } from "../HTMLGrid/HTMLGrid";
import { LeeAlgorithm } from "../LeeAlgorithm/LeeAlgorithm";
import { Utils } from "../Utils/Utils";
import { ZERO, COLORS } from "./Lines98Playground.config";

export class Lines98Playground extends Grid {
  constructor (parentSelector) {
    super('div', localStorage.getItem('playgroundRows') || 9, localStorage.getItem('playgroundColumns') || 9, `${parentSelector}`, 'playground__cell');
    
    this.ballsColors = localStorage.getItem('ballsColors') || COLORS;
    this.countBallsToGenerate = localStorage.getItem('countBallsToGenerate') || 3;
    this.score = localStorage.getItem('score') || 0;
    this.recored = localStorage.getItem('recored') || 0;
    this._init();
  }

  _init() {
    super.draw('beforeend');
    this._generateBalls();
    
    document.querySelector(this._parentSelector).addEventListener('click', this._playgroundInteraction.bind(this));
    const playgroundElements = document.querySelectorAll('.playground__cell');
    this.playgroundCells = [];
    for (let i = 0; i < this.columns; i++) {
      this.playgroundCells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        this.playgroundCells[i].push(playgroundElements[i * this.columns + j]);
      }
    }
  }

  _generateBalls() {
    const emptyCells = document.querySelectorAll('.playground .playground__cell:empty');
    const cellsForFilling = Utils.generateUniqueNumbers(this.countBallsToGenerate, ZERO, emptyCells.length);
    if (cellsForFilling !== undefined) {
      cellsForFilling.forEach((item) => {
        const ball = document.createElement('div');
        ball.classList.add(`playground__ball_${this.ballsColors[Utils.randomInteger(0, this.ballsColors.length)]}`);
        emptyCells[item].insertAdjacentElement('beforeend', ball);
      })
    }
  }

  _moveBall(element) {
    element.insertAdjacentElement('beforeend', this._selectedCell.firstElementChild);
    this._selectedCell.classList.remove('playground__cell_selected')
    this._selectedCell = null;
  }

  _getRoute(element) {
    let matrix = [];

    let x1 = null;
    let y1 = null;
    let x2 = null;
    let y2 = null;
    
    for (let i = 0; i < this.rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < this.columns; j++) {
        if (this.playgroundCells[i][j].firstElementChild) {
          matrix[i][j] = -1;
        } else {
          matrix[i][j] = 0;
        }
        if (this.playgroundCells[i][j] == this._selectedCell) {
          x1 = i;
          y1 = j;
          matrix[i][j] = 0;
        }
        if (this.playgroundCells[i][j] == element) {
          x2 = i;
          y2 = j;
          matrix[i][j] = 0;
        }
      }
    }
    
    const leeAlgo = new LeeAlgorithm(matrix, x1, y1, x2, y2);
    leeAlgo.pathfinder();
    return leeAlgo.backtrace();;
  }

  _getMatchesInRow() {
    const resultRows = [];
    for (let y = 0; y < this.rows; y++) {
      let matchesInRow = [];
      let previous = this.playgroundCells[y][0].firstElementChild?.classList[0];
      for (let x = 0; x < this.columns; x++) {
        let current  = this.playgroundCells[y][x].firstElementChild?.classList[0];
        if (current != previous) {
          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {
            resultRows.push(matchesInRow);
          }
          matchesInRow = [];
        }
        matchesInRow.push(this.playgroundCells[y][x]);
        previous = current;
      }
      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {
        resultRows.push(matchesInRow);
      }
    }
    return resultRows;
  }

  _getMatchesInColumn() {
    let resultColumns = [];
    for (let x = 0; x < this.columns; x++) {
      let matchesInRow = [];
      let previous = this.playgroundCells[0][x].firstElementChild?.classList[0];
      for (let y = 0; y < this.rows; y++) {
        let current  = this.playgroundCells[y][x].firstElementChild?.classList[0];
        if (current != previous) {
          if (matchesInRow[0].firstElementChild  && matchesInRow.length >= 5) {
            resultColumns.push(matchesInRow);
          }
          matchesInRow = [];
        }
        matchesInRow.push(this.playgroundCells[y][x]);
        previous = current;
      }
      if (matchesInRow[0].firstElementChild && matchesInRow.length >= 5) {
        resultColumns.push(matchesInRow);
      }
    }
    return resultColumns;
  }

  _deleteShapes() {
    let isDeleted = false;
    
    const resultColumns = this._getMatchesInColumn();
    resultColumns.forEach(row => {
      row.forEach(item => {
        if (item.firstElementChild) {
          this.score += 2;
          item.firstElementChild.remove();
          isDeleted = true;
        }
      })
    })
    
    const resultRows = this._getMatchesInRow();
    resultRows.forEach(row => {
      row.forEach(item => {
        if (item.firstElementChild) {
          this.score += 2;
          item.firstElementChild.remove();
          isDeleted = true;
        }
      })
    })

    return isDeleted;
  }

  _saveToLocalStorage() {
    localStorage.setItem('score', this.score);
    localStorage.setItem('recored', this.recored);
  }

  reset() {
    super.clear();
    this._init();
  }

  _playgroundInteraction(event) {
    let element = event.target;
    
    if (!element.classList.contains(`${this._parentSelector}`)) {
    
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
        const route = this._getRoute(element);
        
        if (route.length) {
          this._moveBall(element, route);
          
          if (!this._deleteShapes()) {
            this._saveToLocalStorage();
            this._generateBalls();
            this._deleteShapes();
            this._saveToLocalStorage();
          }
        }
      }
    }
  }
}