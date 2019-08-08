import { store } from '../data/store.js';
import makeUser from './make-user.js';

const userSignUp = document.getElementById('user-form');

userSignUp.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(userSignUp);
    const user = makeUser(formData);

    store.saveUser(user);
    
    window.location.href = 'study/study.html';
});