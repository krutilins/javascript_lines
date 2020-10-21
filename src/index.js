/**
 * IMPORTS
 */
import './css/style.css';

/**
 * CONSTANTS
 */
const ZERO = 0;
const howManyBallsToGenerate = 3;
const colors = [
  "aqua",
  "blue",
  "green",
  "pink",
  "red",
  "violet",
  "yellow"
]
const playgroundColumns = 9;
const playgroundRows = 9;

/**
 * SCRIPT
 */
drawPlaygroundCells(playgroundColumns, playgroundRows);
generateBalls(howManyBallsToGenerate);

let playground = document.getElementsByClassName('playground')[0];
playground.addEventListener('click', function() {generateBalls(howManyBallsToGenerate)});

/**
 * FUNCTIONS
 */
function drawPlaygroundCells(playgroundColumns, playgroundRows) {
  let playground = document.querySelector('.playground');
  for (let i = 0; i < playgroundColumns; i++) {
    for (let j = 0; j < playgroundRows; j++) {
      let newCell = document.createElement('div');
      newCell.classList.add('playground__cell');
      playground.insertAdjacentElement('beforeend', newCell);
    }
  }
}

function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min);
  return Math.floor(rand);
}

function generateUniqueNumbers(count, min, max) {
  let result = [];
  /**
   * if you need to generate more than we have
   * in the range from min to max - return
   * numbers of range
   */
  if (count > max - min) {
    for (let i = min; i <= max; i++) {
      result.push(i);
    }
  } else {
    for (let i = 0; i < count; i++) {
      let tepmNumber = randomInteger(min, max);
      if (!result.includes(tepmNumber)) {
        result.push(tepmNumber);
      } else {
        i--;
      }
    }
  }
  return result;
}

function generateBalls(ballsCount) {
  let emptyCells = document.querySelectorAll('.playground__cell');
  let cellsForFilling = generateUniqueNumbers(ballsCount, ZERO, emptyCells.length);
  console.log(cellsForFilling);
  cellsForFilling.forEach((item) => {
    let ball = document.createElement('div');
    ball.classList.add(`playground__ball_${colors[randomInteger(0, colors.length)]}`);
    emptyCells[item].insertAdjacentElement('beforeend', ball);
  })
}