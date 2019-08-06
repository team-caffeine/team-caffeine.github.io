import drinks from '../data/drinks.js';
import store from '../data/store.js';

const test = QUnit.test;

QUnit.module('Local Store');

store.storage = window.sessionStorage;

QUnit.testStart(() => {
    store.storage.clear();
});

test('get drinks date and saves it to local storage', (assert) => {
    //arrange
    const key = 'coffee';
    const coffee = { name: 'black' };

    //act
    store.save(key, coffee);
    const got = store.get(key);

    //assert
    assert.deepEqual(got, coffee);
});

test('verify that the drink info is pulling correctly', (assert) => {
    //act
    const masterDrinksList = store.getDrinks();

    //assert
    assert.deepEqual(masterDrinksList, drinks);
});

test('save user info and verify it is correct', (assert) => {
    //arrange
    const user = {
        name: 'Alex',
        avatar: './assets/barista1.png'
    };

    //act
    store.saveUser(user);
    const result = store.getUser();

    //assert
    assert.deepEqual(result, user);
})