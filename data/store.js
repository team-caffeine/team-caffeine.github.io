import drinks from './drinks.js';

const SAVED_INGREDIENTS = 'ingredient-list';

const store = {
    storage: window.localStorage,
    save(key, item) {
        const json = JSON.stringify(item);
        store.storage.setItem(key, json);
    },
    get(key) {
        const json = store.storage.getItem(key);
        const item = JSON.parse(json);
        return item;
    },
    getDrinks(){
        let masterDrinksList = store.get('drinks');
        if(!masterDrinksList) {
            store.save('drinks', drinks);
            masterDrinksList = drinks;
        }
        return masterDrinksList;
    },
    saveUser(user){
        const json = JSON.stringify(user);
        store.storage.setItem('user', json);
    },
    getUser() {
        const json = store.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    saveResults(ingredient) {
        store.save(SAVED_INGREDIENTS, ingredient);
    },
    getIngredient() {
        const json = store.storage.getItem(SAVED_INGREDIENTS);
        if(!json) return null;
        let ingredient = JSON.parse(json);
        return ingredient;
    }
};

export default store;