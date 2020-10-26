export class HTMLElement {
  constructor(tagName, parentSelector, ...classList) {
    this._tagName = tagName;
    this._parentSelector = parentSelector;
    this._classList = classList;
  }
  draw(position) {
    this._parentElement = document.querySelector(`${this._parentSelector}`);
    this._$ = document.createElement(`${this._tagName}`);
    for (const className of this._classList) {
      this._$.classList.add(className);
    }
    this._parentElement.insertAdjacentElement(`${position}`, this._$);
    return this._$;
  }
  reset() {
    this.clear();
    this.draw();
  }
  clear() {
    this._$.remove();
  }
}