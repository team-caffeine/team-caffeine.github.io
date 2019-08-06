import store from '../../data/store.js';

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

const ingredientButton = document.getElementsByClassName('ingredient-buttons');
for(let i = 0; i < ingredientButton.length; i++) {
    const clickedIngredient = ingredientButton[i];
    clickedIngredient.addEventListener('click', getIngredient);
}
function getIngredient() {

    let ingredient = event.currentTarget;
    ingredient.id;
    // console.log(ingredient.id);
    store.saveResults(ingredient.id);
}

let ingredient = store.getIngredient();
console.log(ingredient);



    