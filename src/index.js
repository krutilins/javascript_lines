/**
 * IMPORTS
 */
import './css/style.css';
import { Playground } from './js/Playground'
import { Scoreboard } from './js/Scoreboard';
/**
 * CONSTANTS
 */
const playgroundColumns = 9;
const playgroundRows = 9;
const howManyBallsToGenerate = 3;
/**
 * SCRIPT
 */
let playground = new Playground(
  playgroundRows,
  playgroundColumns,
  howManyBallsToGenerate
);
new Scoreboard('.scoreboard').bindWithElement('.playground', playground);
// refresh
let button = document.querySelector('.restart-btn__button');
button.addEventListener('click', playground.clear.bind(playground));
