// import drinks from '../data/drinks.js';
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
    const drinksList = store.getDrinks();

    //assert
    
});