import { Utils } from "../../Utils/Utils";
import { ZERO, BALL_COLORS } from "./BallsGenerator.config";

export class BallsGenerator {
  
  static _generateBalls(parentClass, shouldBeFilledClass, countBallsToGenerate) {
  
    const emptyCells = document.querySelectorAll(`.${parentClass} .${shouldBeFilledClass}:empty`);
    const cellsForFilling = Utils.generateUniqueNumbers(countBallsToGenerate, ZERO, emptyCells.length);
    
    if (cellsForFilling !== undefined) {
    
      cellsForFilling.forEach((item) => {
       
        const ball = document.createElement('div');
        ball.classList.add(`${parentClass}__ball_${BALL_COLORS[Utils.randomInteger(0, BALL_COLORS.length)]}`);
        emptyCells[item].insertAdjacentElement('beforeend', ball);
      
      });
    
    }
  
  }

}