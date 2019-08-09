const getStartedButton = document.getElementById('get-started-button');
const signInWindow = document.getElementById('register-form');
const welcomeWindow = document.getElementById('instructions');
const avatarImage = document.getElementsByClassName('barista-button');
const avatarOne = document.getElementById('barista-1');
const avatarTwo = document.getElementById('barista-2');
const avatarThree = document.getElementById('barista-3');

signInWindow.classList.add('hidden');
getStartedButton.addEventListener('click', () => {
    welcomeWindow.classList.add('hidden');
    signInWindow.classList.remove('hidden');
});

for(let i = 0; i < avatarImage.length; i++) {
    const clickedAvatar = avatarImage[i];
    clickedAvatar.addEventListener('click', () => {
        avatarOne.classList.remove('border');
        avatarTwo.classList.remove('border');
        avatarThree.classList.remove('border');
        clickedAvatar.classList.add('border');
    });
}