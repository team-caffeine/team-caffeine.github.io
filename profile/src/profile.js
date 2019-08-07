import renderAllTimeProfile from '../all-time-user-render.js';
import finishedDrinks from '../../data/all-time-finished-drinks.js';
// import store from '../../data/store.js';
import drinks from '../../data/drinks.js';
import { findDrink } from '../../src/util.js';

const allTimeDrinks = document.getElementById('all-time-container');

const allTimeDrinksList = finishedDrinks;
// console.log(allTimeDrinksRender); //THIS IS WHAT WE WILL HAVE TO CHANGE WHEN WE STORE DRINKS COMPLETED TO LOCAL STORAGE
const drinksList = drinks;
// console.log(drinksList);

for(let i = 0; i < allTimeDrinksList.length; i++) {
    const drinkLine = allTimeDrinksList[i];
    // console.log(drinkLine);
    const drink = findDrink(drinksList, drinkLine.id);
    const dom = renderAllTimeProfile(drinkLine, drink);
    // console.log(dom);
    allTimeDrinks.appendChild(dom);
}
