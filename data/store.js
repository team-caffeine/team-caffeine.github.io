import drinks from './drinks.js';

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
    }
};

export default store;