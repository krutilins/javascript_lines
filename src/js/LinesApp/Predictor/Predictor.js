import { HTMLElement } from "../../HTML/HTMLElement/HTMLElement";
import { HTMLGrid } from "../../HTML/HTMLGrid/HTMLGrid";

export class Predictor {
  constructor(app) {
    this._app = app;
  }

  initPredictorIn() {
    const ballsPredictor = new HTMLElement('div', 'balls-predictor');
    ballsPredictor.drawAdjacent('beforeend', this._app.HTMLElement);

    new HTMLGrid('div', 1, 3, 'balls-predictor__cell')
      .drawAdjacent('beforeend', ballsPredictor.HTMLElement);
  }
}