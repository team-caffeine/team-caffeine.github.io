import store from '../src/data/store.js';
import products from '../src/data/f&s-data.js';
const test = QUnit.test;
QUnit.module('Store Object');
store.storage = window.sessionStorage;
QUnit.testStart(() => {
    store.storage.clear();
});
test('do i get the same object', assert => {
   //arrange
    const car = { make: 'dodge ' };
    const key = 'car';
   //act
    store.save(key, car);
    const expected = store.get(key);
   //assert
    assert.deepEqual(expected, car);
});
test('am i storing the inventory into storage', assert => {
   //act
    const productInventory = store.getProducts();
   //assert
    assert.deepEqual(productInventory, products);
});
test('im returning an empty shopping cart', assert => {
   //act
    const shoppingCart = store.getShoppingCart();
   //assert
    assert.deepEqual(shoppingCart, []);
});
test('add orders to shopping cart', assert => {
   //arrange
    const code = 'ground-chuck';
    const expected = [{
        code: 'ground-chuck',
        quantity: 1,
    }];
   //act
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();
   //assert
    assert.deepEqual(shoppingCart, expected);
});
test('add multiple of the same item on the cart', assert => {
   //arrange
    const code = 'ground-chuck';
    const expected = [{
        code: 'ground-chuck',
        quantity: 2,
    }];
   //act
    store.orderProduct(code);
    store.orderProduct(code);
    const shoppingCart = store.getShoppingCart();
   //assert
    assert.deepEqual(shoppingCart, expected);
});
test('get product from inventory', assert => {
   //arrange
    const code = 'ground-chuck';
    const expected = products[0];
   //act
    const product = store.getProduct(code);
   //assert
    assert.deepEqual(product, expected);
});
test('add new product to inventory', assert => {
   //arrange
    const product = {
        code: 'gardening-shears',
        name: 'Gardening Shears',
        image: './assets/gardening-shears.png',
        description: 'Shears meant for gardening',
        category: 'stuff',
        price: 13.00,
        cost: 6.00,
    };
   //act
    store.addProduct(product);
    const products = store.getProducts();
   //assert
    assert.deepEqual(products[products.length - 1], product);
});