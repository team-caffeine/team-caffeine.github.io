import renderAllTimeProfile from '../all-time-user-render.js';
import renderSessionProfileLine from '../session-user-render.js';
import { store, sessionStore } from '../../data/store.js';
import drinks from '../../data/drinks.js';
import { findDrink } from '../../src/util.js';

const allTimeDrinks = document.getElementById('all-time-container');
const sessionDrinks = document.getElementById('session-container');

const allTimeDrinksList = store.getFinishedDrinks();
const sessionDrinkList = sessionStore.getFinishedDrinks();
const drinksList = drinks;

for(let i = 0; i < allTimeDrinksList.length; i++) {
    const drinkLine = allTimeDrinksList[i];
    const drink = findDrink(drinksList, drinkLine.id);
    const dom = renderAllTimeProfile(drinkLine, drink);
    allTimeDrinks.appendChild(dom);
}

for(let i = 0; i < sessionDrinkList.length; i++) {
    const drinkLine = sessionDrinkList[i];
    const drink = findDrink(drinksList, drinkLine.id);
    const dom = renderSessionProfileLine(drinkLine, drink);
    sessionDrinks.appendChild(dom);
}
