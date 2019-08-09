import { store, sessionStore } from '../../data/store.js';

const ingredients = document.getElementsByClassName('ingredients');
const makeDrinkButton = document.getElementById('make-drink');
const resultsMessage = document.getElementById('results-message');
const cupDisplay = document.getElementById('cup-display');
const emptyCup = document.getElementById('empty-cup');
const startPlay = document.getElementById('start-play');
const overlay = document.getElementById('overlay');
const instructionsContainer = document.getElementById('instructions-container');
const orderHeader = document.getElementById('pick-drink-text');
const orderForm = document.getElementById('order-form');
const ingredientButton = document.getElementsByClassName('ingredient-buttons');

let selectedDrink;
let drinkId;
let index = 0;

initializeGame();
recognizeDrinkSelection();
makeDrink();

function initializeGame() {
    startPlay.addEventListener('click', () => {
        overlay.classList.remove('overlay-background');
        makeDrinkButton.classList.remove('hidden');
        orderHeader.classList.remove('hidden');
        orderForm.classList.remove('hidden');
        instructionsContainer.classList.add('hidden');
        startPlay.classList.add('hidden');
    });
}

function recognizeDrinkSelection() {
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
}

function makeDrink() {
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
            }
            else {
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
                setTimeout(function() {
                    index = 0;
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
    }
}