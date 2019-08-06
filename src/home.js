
const getStartedButton = document.getElementById('get-started-button');
const signInWindow = document.getElementById('register-form');
const welcomeWindow = document.getElementById('instructions');


signInWindow.classList.add('hidden');
getStartedButton.addEventListener('click', () => {
    welcomeWindow.classList.add('hidden');
    signInWindow.classList.remove('hidden');
});