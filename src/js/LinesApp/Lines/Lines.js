import { HTMLElement } from "../../HTML/HTMLElement/HTMLElement";
import { Scoreboard } from "../Scoreboard/Scoreboard";
import { Playground } from "../Playground/Playground";
import { Predictor } from "../Predictor/Predictor";
import { RestartButton } from "../RestartButton/RestartButton";
import { BallsGenerator } from "../BallsGenerator/BallsGenerator";

export class Lines {
  drawElementAdjacent(position, parentElement) {

    this._parentElement = parentElement;
    this._position = position;

    const app = new HTMLElement('div', 'app');
    app.drawAdjacent('beforeend', this._parentElement);

    this._restartButton = new RestartButton(app);
    this._restartButton.initRestartButton();
    
    this._scoreboard = new Scoreboard(app);
    this._scoreboard.initScoreboardIn();
    
    this._playground = new Playground(app);
    this._playground.initPlayground();
    
    // this._predictor = new Predictor(app);
    // this._predictor.initPredictorIn();

    app.HTMLElement.addEventListener('click', this._clickHandler.bind(this));
    
  }

  _clickHandler(event) {
    
    const target = event.target;
    
    if (!target.classList.contains('app')) {
      
      if (target.closest('.restart-btn')) {
        
        localStorage.setItem('score', 0);
        this._scoreboard.update();
        this._playground.reset();
        
      } else if (target.closest('.playground')) {
        
        this._playground.playgroundInteraction(event);
        this._scoreboard.update();

      }
    
    }
  
  }

}