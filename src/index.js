/**
 * IMPORTS
 */
import './css/style.css';
import { HTMLElement } from './js/HTMLElement/HTMLElement';
import { Lines98Playground } from './js/Lines98Playground/Lines98Playground';
import { Scoreboard } from './js/Scoreboard/Scoreboard';
/**
 * SCRIPT
 */

const wrapper = new HTMLElement('div', '.root', 'wrapper');
wrapper.draw('beforeend');

const wrapperMain = new HTMLElement('div', '.wrapper', 'wrapper__main');
wrapperMain.draw('beforeend');

const app = new HTMLElement('div', '.wrapper__main', 'app');
app.draw('beforeend');

const playground = new HTMLElement('div', '.app', 'playground')
playground.draw('beforeend');

const lines = new Lines98Playground('.playground');

const board = new Scoreboard('.app', lines, 'scoreboard');
board.draw('afterbegin');

// const lines = new Lines98Playground();
// new Scoreboard('.app', '.scoreboard').bindWithElement('.playground', lines);
// // refresh
// document.querySelector('.restart-btn__button').addEventListener('click', lines.reset.bind(lines));
