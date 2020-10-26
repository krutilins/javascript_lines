import { HTMLElement } from '../HTMLElement/HTMLElement'

export class Grid extends HTMLElement {
  constructor(tagName, rows, columns, parentSelector, ...classList) {
    super(tagName, parentSelector, ...classList);
    
    this.rows = rows;
    this.columns = columns;
  }
  
  draw(position) {
    this._gridCells = [];
    for (let i = 0; i < this.columns; i++) {
      this._gridCells[i] = [];
      for (let j = 0; j < this.rows; j++) {
        this._gridCells[i].push(super.draw(position));
      }
    }
  }
  
  clear() {
    for (let i = 0; i < this.columns; i++) {
      for (let j = 0; j < this.rows; j++) {
        this._gridCells[i][j].remove();
      }
      this._gridCells[i] = [];
    }
    this._gridCells = [];
  }
  
  reset() {
    this.clear();
    this.draw('beforeend');
  }
  
  addEvent(eventType, eventListener) {
    document.querySelector(`${this._parentSelector}`).addEventListener(eventType, eventListener);
  }
}