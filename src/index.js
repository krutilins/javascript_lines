/**
 * IMPORTS
 */
import './css/style.css';
import { HTMLElement } from './js/HTML/HTMLElement/HTMLElement';
import { Lines } from './js/LinesApp/Lines/Lines';
/**
 * SCRIPT
 */
const root = document.querySelector('.root');

const wrapper = new HTMLElement('div', 'wrapper');
wrapper.drawAdjacent('beforeend', root);

const wrapperMain = new HTMLElement('div', 'wrapper__main');
wrapperMain.drawAdjacent('beforeend', wrapper.HTMLElement);

const lines = new Lines();
lines.drawElementAdjacent('beforeend', wrapperMain.HTMLElement);