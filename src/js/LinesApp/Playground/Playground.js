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

    this._ballsIsDeleted = Number(localStorage.getItem('score'));
    this.countBallsToGenerate = 3;
    BallsGenerator._generateBalls('playground', 'playground__cell', this.countBallsToGenerate);

    this.gridCells = grid.gridCells;
    this.rows = grid.rows;
    this.columns = grid.columns;
    
  }

  _getRouteFromSelectedTo(element) {
    
    let x1 = null;
    let y1 = null;
    let x2 = null;
    let y2 = null;
    
    let matrix = [];
    
    for (let i = 0; i < this.rows; i++) {
      
      matrix[i] = [];
      for (let j = 0; j < this.columns; j++) {
      
        if (this.gridCells[i][j].firstElementChild) {
      
          matrix[i][j] = -1;
      
        } else {
      
          matrix[i][j] = 0;
      
        }
        if (this.gridCells[i][j] == this._selectedCell) {
      
          x1 = i;
          y1 = j;
      
        }
        if (this.gridCells[i][j] == element) {
      
          x2 = i;
          y2 = j;
      
        }
    
      }
    
    }
    
    return LeeAlgorithm.getRoute(matrix, x1, y1, x2, y2);
  
  }

  _updateLocaleStorage() {

    localStorage.setItem('score', this._ballsIsDeleted);
    
    const recored = this._ballsIsDeleted > Number(localStorage.getItem('recored')) ? this._ballsIsDeleted : Number(localStorage.getItem('recored'));
    localStorage.setItem('recored',  recored);
  
  }

  reset() {

    this.initPlayground();

  }

  _moveBall(target, route) {

    target.insertAdjacentElement('beforeend', this._selectedCell.firstElementChild);
    this._selectedCell.classList.remove('playground__cell_selected')
    this._selectedCell = null;
  
  }

  

  playgroundInteraction(event) {
    
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
        
      } else if (this._selectedCell) {
        
        const route = this._getRouteFromSelectedTo(target);

        if (route.length) {
         
          this._moveBall(target, route);

          this._ballsIsDeleted += MatchesDeleter.deleteMatches(this.gridCells);
          
          BallsGenerator._generateBalls('playground', 'playground__cell', this.countBallsToGenerate);
          this._ballsIsDeleted += MatchesDeleter.deleteMatches(this.gridCells)
          
          this._updateLocaleStorage();
        
        }
      
      }
    
    }
  
  }

}