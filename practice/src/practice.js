import store from '../../data/store.js';
import { getSelectedDrink } from './render-cups.js';

const ingredientOne = document.getElementById('ingredient-1');
const ingredientTwo = document.getElementById('ingredient-2');
const ingredientThree = document.getElementById('ingredient-3');
const ingredientFour = document.getElementById('ingredient-4');

// const ingredientButton = document.getElementsByClassName('ingredient-buttons');

// let ingredient;

// if(ingredient === 'espresso') {
//     // console.log('true');
// }
// else {
//     // console.log('false');
// }

// const result = detectIngredient(ingredientButton);

// function detectIngredient(ingredientButton) {
// }
// }

// for(let i = 0; i < ingredientButton.length; i++) {
//     ingredientButton[i].addEventListener('click', function() {
//         let ingredient = ingredientButton[i].id;
//         // console.log(ingredient);
//         console.log(ingredient);
//         return ingredient;
//     });
// }

let currentDrink = [];
const selectedDrink = store.getSelectedDrink();

const ingredientButton = document.getElementsByClassName('ingredient-buttons');
for(let i = 0; i < ingredientButton.length; i++) {
    const clickedIngredient = ingredientButton[i];
    clickedIngredient.addEventListener('click', () => {
        let ingredient = event.currentTarget;
        
        ingredient.id;
        // console.log(ingredient.id);
        currentDrink.push(ingredient.id);
        console.log(currentDrink);
        console.log(selectedDrink);

        if(currentDrink[0] === selectedDrink[0]) {
            ingredientOne.src = '../assets/ingredients/' + selectedDrink[0] + '.png';
        } else {
            return;
        }
        if(currentDrink[1] === selectedDrink[1]) {
            ingredientTwo.src = '../assets/ingredients/' + selectedDrink[1] + '.png';
        } else {
            return;
        }
    });
}


// let ingredient = store.getIngredient();
// console.log(ingredient);



    