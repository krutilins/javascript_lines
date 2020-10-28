export class HTMLElement {
  constructor(tagName, ...classList) {
    
    this._tagName = tagName;
    this._classList = classList;
  
  }

  addEvent(eventType, eventListener) {

    this.HTMLElement.addEventListener(eventType, eventListener);

    return this;
  
  }

  setText(text) {

    this.HTMLElement.innerText = text;

    return this;
  
  }

  drawAdjacent(position, parentElement) {
    
    this._position = position;
    this._$parentElement = parentElement;
  
    this.HTMLElement = document.createElement(`${this._tagName}`);
    
    for (const className of this._classList) {
    
      this.HTMLElement.classList.add(className);
    
    }
    
    this._$parentElement.insertAdjacentElement(`${position}`, this.HTMLElement);
   
    return this;
  }
  
  clear() {
  
    this.HTMLElement?.remove();

    return this;
  
  }

  reset() {
  
    this.clear();
    this.drawAdjacent(this._position, this._$parentElement);

    return this;
    
  }

}