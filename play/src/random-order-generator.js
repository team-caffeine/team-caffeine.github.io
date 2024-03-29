import { getRandomInt } from '../../src/util.js';
import { store } from '../../data/store.js';

getRandomDrink();

function getRandomDrink() {
    const drinks = store.getDrinks();
    const index = getRandomInt(drinks.length);
    const randomDrink = drinks[index];
    return randomDrink;
}

randomOrderNoDuplicates();

export function randomOrderNoDuplicates() {
    const randomDrinkOrder = [];
    while(randomDrinkOrder.length < 5) {
        let duplicate = false;
        const randomDrink = getRandomDrink();
        for(let i = 0; i < randomDrinkOrder.length; i++) {
            if(randomDrinkOrder[i].id === randomDrink.id) {
                duplicate = true;
                break;
            }
        }
        if(!duplicate) {
            randomDrinkOrder.push(randomDrink);
        }
    }
    return randomDrinkOrder;
}