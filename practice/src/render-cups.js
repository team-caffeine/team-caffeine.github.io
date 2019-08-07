import drinks from '../../data/drinks.js';
import { findDrink } from '../../src/util.js';
import store from '../../data/store.js';

// const ingredientOne = document.getElementById('ingredient-1');
// const ingredientTwo = document.getElementById('ingredient-2');
// const ingredientThree = document.getElementById('ingredient-3');
// const ingredientFour = document.getElementById('ingredient-4');

userSelectedDrink();

export function userSelectedDrink() {
    const coffeeInputs = document.getElementsByName('coffee');
    for(let i = 0; i < coffeeInputs.length; i++) {
        const coffee = coffeeInputs[i];
        coffee.addEventListener('change', function() {
            const drinkToMake = findDrink(drinks, coffeeInputs[i].value);
            const ingredients = drinkToMake.ingredients;
            const drinkId = drinkToMake.id;
            store.saveSelectedDrink(ingredients, drinkId);
        });
    }
}
// function renderMocha() {

// }