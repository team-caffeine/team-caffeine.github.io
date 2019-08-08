import { randomOrderNoDuplicates } from './random-order-generator.js';
import renderRandomOrder from './render-random-order.js';
import { userSelectedDrink } from '../../practice/src/render-cups.js';

const startPlay = document.getElementById('start-play');
const resultsButton = document.getElementById('results-button');
const tryAgain = document.getElementById('try-again');
const resultMessage = document.getElementById('you-lose-message');
const overlay = document.getElementById('overlay');
const emptyCup = document.getElementById('empty-cup');
const orderForm = document.getElementById('order-form');

tryAgain.addEventListener('click', () => {
    location.reload();
});

let interval;

// From JSFiddle.net https://jsfiddle.net/wr1ua0db/17/
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if(--timer < 0) {
            resultMessage.textContent = 'You lose!';
            clearInterval(interval);
            overlay.classList.add('overlay-background');
            emptyCup.classList.add('hidden');
            resultsButton.classList.remove('hidden');
            tryAgain.classList.remove('hidden');
        }
    }, 1000);
}

const randomOrder = randomOrderNoDuplicates();

startPlay.addEventListener('click', () => {
    for(let i = 0; i < randomOrder.length; i++) {
        const drinkItem = randomOrder[i];
        const dom = renderRandomOrder(drinkItem);
        orderForm.appendChild(dom);
    }
    userSelectedDrink();
    overlay.classList.remove('overlay-background');
    var oneMinute = 60,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
    startPlay.classList.add('hidden');
});

import { store, sessionStore } from '../../data/store.js';

const ingredients = document.getElementsByClassName('ingredients');
const makeDrinkButton = document.getElementById('make-drink');
const resultsMessage = document.getElementById('results-message');
const cupDisplay = document.getElementById('cup-display');
const coffeeInputs = document.getElementsByName('coffee');

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
let winCount = 0;

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
            winCount++;
            cupDisplay.classList.add('on-win');
            for(let i = 0; i < coffeeInputs.length; i++) {
                if(drinkId === coffeeInputs[i].value) {
                    coffeeInputs[i].classList.add('hidden');
                    coffeeInputs[i].parentElement.classList.add('strike-through');
                }
            }
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
        if(winCount === 5) {
            resultMessage.textContent = 'You win!';
            clearInterval(interval);
            overlay.classList.add('overlay-background');
            emptyCup.classList.add('hidden');
            resultsButton.classList.remove('hidden');
            tryAgain.classList.remove('hidden');
        }
    });
}
