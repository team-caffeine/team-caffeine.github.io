import drinks from '../../data/drinks.js';
import { findDrink } from '../../src/util.js';
import { store } from '../../data/store.js';

const makeItButton = document.getElementById('make-drink');

userSelectedDrink();

export function userSelectedDrink() {
    const coffeeInputs = document.getElementsByName('coffee');
    for(let i = 0; i < coffeeInputs.length; i++) {
        const coffee = coffeeInputs[i];
        coffee.addEventListener('change', function() {
            const drinkToMake = findDrink(drinks, coffeeInputs[i].value);
            const ingredients = drinkToMake.ingredients;
            const drinkId = drinkToMake.id;
            makeItButton.classList.add('on-select-drink');
            store.saveSelectedDrink(ingredients, drinkId);
            setTimeout(function() { 
                makeItButton.classList.remove('on-select-drink');  
            }, 200);
        });
    }
}
// function renderMocha() {

// }