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

/**
 * FUNCTIONS
 */
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