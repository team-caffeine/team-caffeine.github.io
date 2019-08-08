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
            resultsButton.classList.remove('hidden');
            tryAgain.classList.remove('hidden');


        }
    }, 1000);
}


const startPlay = document.getElementById('start-play');
const resultsButton = document.getElementById('results-button');
const tryAgain = document.getElementById('try-again');
const youLoseMessage = document.getElementById('you-lose-message');

startPlay.addEventListener('click', () => {
    var oneMinute = 5,
        display = document.querySelector('#timer');
    startTimer(oneMinute, display);
    startPlay.classList.add('hidden');
});
// window.onload = function () {
//     var oneMinute = 60,
//         display = document.querySelector('#timer');
//     startTimer(oneMinute, display);
// };