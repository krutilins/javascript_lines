import { HTMLElement } from "../../HTML/HTMLElement/HTMLElement";
import { HTMLGrid } from "../../HTML/HTMLGrid/HTMLGrid";
import { LeeAlgorithm } from "../../LeeAlgorithm/LeeAlgorithm";
import { BallsGenerator } from "../BallsGenerator/BallsGenerator";
import { MatchesDeleter } from "../MatchesDeleter/MatchesDeleter";

export class Playground{
  
  constructor(app) {
  
    this._app = app;
    
  }
  
  initPlayground() {
    
    if (this._playground) {
      
      this._playground.clear();
    
    }
    
    this._playground = new HTMLElement('div', 'playground');
    this._playground.drawAdjacent('beforeend', this._app.HTMLElement);
    
    const grid = new HTMLGrid('div', 9, 9, 'playground__cell');
    grid.drawAdjacent('beforeend', this._playground.HTMLElement);

    this.countBallsToGenerate = 3;
    BallsGenerator._generateBalls('playground', 'playground__cell', this.countBallsToGenerate);
    localStorage.setItem('score', 0);

    this.gridCells = grid.gridCells;
    this.rows = grid.rows;
    this.columns = grid.columns;
    
  }

  _getRouteFromSelectedTo(element) {
    
    let x1 = null;
    let y1 = null;
    let x2 = null;
    let y2 = null;
    
    const matrix = [];
    
    for (let i = 0; i < this.rows; i++) {
      
      matrix[i] = [];
      
      for (let j = 0; j < this.columns; j++) {
      
        if (this.gridCells[i][j].firstElementChild) {
        
          matrix[i][j] = -1;
        
        } else {
        
          matrix[i][j] = 0;
        
        }

        if (this.gridCells[i][j] == this._selectedCell) {
        
          x1 = j;
          y1 = i;
        
        } else if (this.gridCells[i][j] == element) {
         
          x2 = j;
          y2 = i;
        
        }
    
      }
    
    }
    
    return LeeAlgorithm.getRoute(matrix, x1, y1, x2, y2);
  
  }

  _updateLocaleStorage() {
    
    const score = Number(localStorage.getItem('score')) + this._countDeletedBalls;
    localStorage.setItem('score', score);
    this._countDeletedBalls = 0;

    if (score > Number(localStorage.getItem('recored'))) {
      
      localStorage.setItem('recored',  score);

    }
  
  }

  reset() {

    this.initPlayground();

  }

  _moveBall(target, route) {
    
    target.insertAdjacentElement('beforeend', this._selectedCell.firstElementChild);
    this._selectedCell.classList.remove('playground__cell_selected')
    this._selectedCell = null;
  
  }

  _drawLines(route) {
    const promises = [];

    for (let i = 1; i < route.length - 1; i++) {
      
      promises.push(new Promise((resolve, reject) => {
        setTimeout(() => {
          const smallBall = document.createElement('div');
          smallBall.classList.add('playground__ball_small');
          this.gridCells[route[i][1]][route[i][0]].insertAdjacentElement('beforeend', smallBall);
          
          setTimeout(() => {
            smallBall.remove();
            resolve();
          }, 50);
        
        }, 50 * i, this);
      }))
    
    }

    return Promise.all(promises);

  }

  playgroundInteraction(event) {   
    return new Promise((resolve, reject) => {

      let target = event.target;
    
      if (!target.classList.contains(`playground`)) {
      
        if (!target.classList.contains('playground__cell')) {
          target = target.parentElement;
        }
        
        if (target.firstElementChild) {
        
          if (this._selectedCell) {
            this._selectedCell.classList.remove('playground__cell_selected');
          }
          
          target.classList.add('playground__cell_selected');
          this._selectedCell = target;
          
          resolve();
          
        } else if (this._selectedCell) {
          
          const route = this._getRouteFromSelectedTo(target);
          if (route.length) {
          
            this._drawLines(route)
            .then(() => {
              this._moveBall(target, route);
            
              this._countDeletedBalls = MatchesDeleter.deleteMatches(this.gridCells);
              
              if (!this._countDeletedBalls) {
              
                BallsGenerator._generateBalls('playground', 'playground__cell', this.countBallsToGenerate);
                this._countDeletedBalls += MatchesDeleter.deleteMatches(this.gridCells)
              
              }
              
              this._updateLocaleStorage();
            
              resolve();
            })
          
          }
        
        }
  
      }


    }) 

  }
    
}