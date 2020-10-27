import { HTMLElement } from '../HTMLElement/HTMLElement'

export class HTMLGrid extends HTMLElement {
  constructor(tagName, rows, columns, ...classList) {
 
    super(tagName, ...classList);
    
    this.rows = rows;
    this.columns = columns;
 
  }
  
  drawAdjacent(position, parentElement) {
    
    this._position = position;
    this._$parentElement = parentElement;

    this.gridCells = [];
    
    for (let i = 0; i < this.columns; i++) {
      
      this.gridCells[i] = [];
      for (let j = 0; j < this.rows; j++) {
    
        super.drawAdjacent(this._position, this._$parentElement)
        this.gridCells[i].push(this.HTMLElement);
    
      }
    
    }

    delete this.HTMLElement;
  
  }
  
  clear() {

    while (this._$parentElement.lastElementChild) {
    
      this._$parentElement.removeChild(this._$parentElement.lastElementChild);
    
    }

    this.gridCells = [];

    return this;
  
  }
  
  addEvent(eventType, eventListener) {

    this._$parentElement.addEventListener(eventType, eventListener);
  
    return this;
    
  }
}