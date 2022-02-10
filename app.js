// import functions and grab DOM elements
import { foods } from './data.js';
import { renderListItem } from './render-utils.js';

const main = document.querySelector('main');

for (let food of foods) {
    const foodDiv = renderListItem(food);
    main.append(foodDiv);
}
// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
