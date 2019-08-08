import { getRandomInt } from '../../src/util.js';
import { store } from '../../data/store.js';

getRandomDrink();

function getRandomDrink() {
    
    const drinks = store.getDrinks();
    const index = getRandomInt(drinks.length);
    const randomDrink = drinks[index];
    return randomDrink;
}

export default generateRandomOrder();

function generateRandomOrder() {
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

console.log(generateRandomOrder());


