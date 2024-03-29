import drinks from '../data/drinks.js';
import { store } from '../data/store.js';

const test = QUnit.test;

QUnit.module('Local Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get drinks date and saves it to local storage', (assert) => {
    const key = 'coffee';
    const coffee = { name: 'black' };

    store.save(key, coffee);
    const got = store.get(key);

    assert.deepEqual(got, coffee);
});

test('verify that the drink info is pulling correctly', (assert) => {
    const masterDrinksList = store.getDrinks();

    assert.deepEqual(masterDrinksList, drinks);
});

test('save user info and verify it is correct', (assert) => {
    const user = {
        name: 'Alex',
        avatar: './assets/barista1.png'
    };

    store.saveUser(user);
    const result = store.getUser();

    assert.deepEqual(result, user);
});
test('saves an drink and pulls it from memory', (assert) => {
    const drink = {
        id: 'americano',
        name: 'Americano',
        ingredients: ['espresso', 'water'],
    };
    store.saveSelectedDrink(drink);
    const result = store.getSelectedDrink();

    assert.deepEqual(result, drink);
});
test('saves clicked ingredient and pulls it from memory', (assert) => {
    const ingredient = 'espresso';

    store.saveResults(ingredient);
    const result = store.getIngredient();

    assert.deepEqual(result, ingredient);
});
test('saves an drink and pulls it from memory', (assert) => {
    const drink = {
        id: 'americano',
        name: 'Americano',
        ingredients: ['espresso', 'water'],
    };
    store.saveSelectedDrink(drink);
    const result = store.getSelectedDrink();

    assert.deepEqual(result, drink);
});
test('saves clicked ingredient and pulls it from memory', (assert) => {
    const ingredient = 'espresso';

    store.saveResults(ingredient);
    const result = store.getIngredient();

    assert.deepEqual(result, ingredient);

});