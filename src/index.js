/**
 * IMPORTS
 */
import './css/style.css';
import {Playground} from './js/Playground'
/**
 * CONSTANTS
 */
const playgroundColumns = 9;
const playgroundRows = 9;
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
/**
 * SCRIPT
 */
let playground = new Playground(
  playgroundRows,
  playgroundColumns,
  howManyBallsToGenerate, 
  ...colors
);
updateBoard.call(playground);
// refresh
let button = document.querySelector('.restart-btn__button');
button.addEventListener('click', playground.refresh.bind(playground));
// score
let playgroundField = document.querySelector('.playground');
playgroundField.addEventListener('click', updateBoard.bind(playground))
/**
 * FUNCTIONS
 */
function updateBoard() {
  let board = document.querySelector('.scoreboard');
  
  let recored = document.createElement('div');
  recored.classList.add('scoreboard__title');
  recored.innerText = `Recored: ${this.recored}`;

  let score = document.createElement('div');
  score.classList.add('scoreboard__title');
  score.innerText = `Score: ${this.score}`;
  
  board.children[0].replaceWith(score);
  board.children[1].replaceWith(recored);
  console.log(board)
}

