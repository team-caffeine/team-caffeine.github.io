import { getRandomInt } from '../../src/util.js';
import { store } from '../../data/store.js';

getRandomDrink();

function getRandomDrink() {
    
    const drinks = store.getDrinks();
    const index = getRandomInt(drinks.length);
    const randomDrink = drinks[index];
    return randomDrink;
}

generateRandomOrder();

export function generateRandomOrder() {
    const randomDrinkOrder = [];
    const randomDrinkOne = getRandomDrink();
    randomDrinkOrder.push(randomDrinkOne);
    const randomDrinkTwo = getRandomDrink();
    randomDrinkOrder.push(randomDrinkTwo);
    const randomDrinkThree = getRandomDrink();
    randomDrinkOrder.push(randomDrinkThree);
    const randomDrinkFour = getRandomDrink();
    randomDrinkOrder.push(randomDrinkFour);
    const randomDrinkFive = getRandomDrink();
    randomDrinkOrder.push(randomDrinkFive);

    return randomDrinkOrder;
}
export default generateRandomOrder();


export function randomOrderNoDuplicates() {
    const randomDrinkOrder = [];

    while(randomDrinkOrder.length < 5) {
        let duplicate = false;
        const randomDrink = getRandomDrink();
        for(let i = 0; i < randomDrinkOrder.length; i++) {
            if(randomDrinkOrder[i] === randomDrink) {
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
// console.log(randomOrderNoDuplicates());


