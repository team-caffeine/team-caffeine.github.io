import { generateRandomOrder } from './random-order-generator.js';
import renderRandomOrder from './render-random-order.js';
import { userSelectedDrink } from '../../practice/src/render-cups.js';

const startPlay = document.getElementById('start-play');
const resultsButton = document.getElementById('results-button');
const tryAgain = document.getElementById('try-again');
const youLoseMessage = document.getElementById('you-lose-message');
const overlay = document.getElementById('overlay');
const emptyCup = document.getElementById('empty-cup');
const orderForm = document.getElementById('order-form');

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    const interval = setInterval(function() {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ':' + seconds;

        if(--timer < 0) {
            youLoseMessage.textContent = 'You lose!';
            clearInterval(interval);
            overlay.classList.add('overlay-background');
            emptyCup.classList.add('hidden');
            resultsButton.classList.remove('hidden');
            tryAgain.classList.remove('hidden');
        }
    }, 1000);
}

const randomOrder = generateRandomOrder();

startPlay.addEventListener('click', () => {
    for(let i = 0; i < randomOrder.length; i++) {
        const drinkItem = randomOrder[i];
        const dom = renderRandomOrder(drinkItem);
        orderForm.appendChild(dom);
    }
    userSelectedDrink();
    overlay.classList.remove('overlay-background');
    var oneMinute = 30,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
    startPlay.classList.add('hidden');
});
