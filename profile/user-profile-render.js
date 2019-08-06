import store from '../data/store.js';

const userAvatarRender = document.getElementById('render-image-profile');
const userNameRender = document.getElementById('username-display');

const userProfile = store.getUser();
userNameRender.textContent = userProfile.username + '\'s Stats';
userAvatarRender.src = '../assets/' + userProfile.avatar + '.png';


