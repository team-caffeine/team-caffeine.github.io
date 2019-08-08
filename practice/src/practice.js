import { store, sessionStore } from '../../data/store.js';

const ingredients = document.getElementsByClassName('ingredients');
const makeDrinkButton = document.getElementById('make-drink');
const resultsMessage = document.getElementById('results-message');
const cupDisplay = document.getElementById('cup-display');
const emptyCup = document.getElementById('empty-cup');

let selectedDrink;
let drinkId;

makeDrinkButton.addEventListener('click', (event) => {
    event.preventDefault();
    makeDrinkButton.classList.remove('on-select-drink');
    emptyCup.classList.remove('hidden');
    ingredients[2].parentElement.setAttribute('id', 'ingredient-2-div');
    selectedDrink = store.getSelectedDrink();
    drinkId = store.getDrinkId();
    for(let i = 0; i < ingredients.length; i++) {
        ingredients[i].classList.add('hidden');
        index = 0; 
    }
});

let index = 0;
const ingredientButton = document.getElementsByClassName('ingredient-buttons');
for(let j = 0; j < ingredientButton.length; j++) {
    const clickedIngredient = ingredientButton[j];
    clickedIngredient.addEventListener('click', () => {
        resultsMessage.textContent = '';
        let ingredient = event.currentTarget;
        const currentIngredient = ingredient.id;
        if(currentIngredient === selectedDrink[index]) {
            if(currentIngredient === 'whipped-cream' && currentIngredient === selectedDrink[1]) {
                ingredients[2].parentElement.setAttribute('id', 'whipped-cream-img');
            }
            ingredients[ingredients.length - 1 - index].classList.remove('hidden');
            ingredients[ingredients.length - 1 - index].src = '../assets/ingredients/' + drinkId + '/' + selectedDrink[index] + '.png';
            index++;
        } else {
            index = 0; 
            for(let i = 0; i < ingredients.length; i++) {
                ingredients[i].classList.add('hidden'); 
            }
            cupDisplay.classList.add('on-wrong');
            resultsMessage.textContent = 'You messed up the drink, try again!';
            setTimeout(function() { 
                resultsMessage.textContent = '';
                cupDisplay.classList.remove('on-wrong');
            }, 1000);
        
        }
        if(index === selectedDrink.length) {
            resultsMessage.textContent = 'Nice, you made it!';
            cupDisplay.classList.add('on-win');
            setTimeout(function() { index = 0; 
                for(let i = 0; i < ingredients.length; i++) {
                    ingredients[i].classList.add('hidden'); 
                    resultsMessage.textContent = '';
                    cupDisplay.classList.remove('on-win');
                }
            }, 1200);
            store.countDrink(store.getDrinkId());
            sessionStore.countDrink(store.getDrinkId());

        } 

    });





















        
//         ingredient.id;
//         // console.log(ingredient.id);
//         currentDrink.push(ingredient.id);
//         console.log(currentDrink);
//         console.log(selectedDrink);
        
//         if(currentDrink[0] === selectedDrink[0] && currentDrink.length <= selectedDrink.length) {
            // ingredientOne.classList.remove('hidden');
            // ingredientOne.src = '../assets/ingredients/' + drinkId + '/' + selectedDrink[0] + '.png';
//         } 
//         if(currentDrink[1] === selectedDrink[1] && currentDrink.length <= selectedDrink.length) {
//             ingredientTwo.classList.remove('hidden');
//             ingredientTwo.src = '../assets/ingredients/' + drinkId + '/' + selectedDrink[1] + '.png';
//             console.log(currentDrink.length);
//         } 
//         if(currentDrink.length === selectedDrink.length) {
//             console.log('you win!');
//             currentDrink = [];
            
//             ingredientTwo.classList.add('hidden');
//             ingredientThree.classList.add('hidden');
//             ingredientFour.classList.add('hidden');
//         }
//         if(!selectedDrink[2]) {
//             ingredientButton.disabled = true;
//             // ADD BUTTON DISABLE FUNCTION
//             return;
//         }
//         if(currentDrink[2] === selectedDrink[2]) {
//             ingredientThree.classList.remove('hidden');
//             ingredientThree.src = '../assets/ingredients/' + drinkId + '/' + selectedDrink[2] + '.png';
//         } 
//         if(currentDrink.length === selectedDrink.length) {
//             console.log('you win!');
//             currentDrink = [];
//             ingredientOne.classList.add('hidden');
//             ingredientTwo.classList.add('hidden');
//             ingredientThree.classList.add('hidden');
//             ingredientFour.classList.add('hidden');
//         }
//         if(!selectedDrink[3]) {
//             // ADD BUTTON DISABLE FUNCTION
//             return;
//         }
//         if(currentDrink[3] === selectedDrink[3]) {
//             ingredientFour.classList.remove('hidden');
//             ingredientFour.src = '../assets/ingredients/' + drinkId + '/' + selectedDrink[3] + '.png';
//         } 
//         if(currentDrink.length === selectedDrink.length) {
//             console.log('you win!');
//             currentDrink = [];
//             ingredientOne.classList.add('hidden');
//             ingredientTwo.classList.add('hidden');
//             ingredientThree.classList.add('hidden');
//             ingredientFour.classList.add('hidden');
//         }
//         else {
//             return;
//         }
//     });
// }
  



// let ingredient = store.getIngredient();
// console.log(ingredient);



}