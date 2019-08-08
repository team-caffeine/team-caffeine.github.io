import { store } from '../data/store.js';

const userName = document.getElementById('profile');
const userAvatar = document.getElementById('user-avatar');
const userProfile = store.getUser();
userName.textContent = userProfile.username;
userAvatar.src = '../assets/' + userProfile.avatar + '.png';



