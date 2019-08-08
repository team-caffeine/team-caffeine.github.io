import { findDrink } from '../src/util.js';
import drinks from '../data/drinks.js';
import renderRandomOrder from '../play/src/render-random-order.js';

const test = QUnit.test;

QUnit.module('Render Random Order');

test('render random order', assert => {
    // arrange
    const drink = {
        id: 'americano',
        name: 'Americano',
        ingredients: ['espresso', 'water'],
        description: 'Caffe Americano is a type of coffee drink prepared by diluting an espresso with hot water, giving it a similar strength to, but different flavor from, traditionally brewed coffee',
        image: 'assets/coffee/americano.png',
    };
    // act
    const expected = '<label><input type="radio" name="coffee" value="americano"> Americano<br></label>';

    const dom = renderRandomOrder(drink);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});