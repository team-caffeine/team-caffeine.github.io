import { findDrink } from '../src/util.js';
import drinks from '../data/drinks.js';
import renderSessionProfileLine from '../profile/session-user-render.js';

const test = QUnit.test;

QUnit.module('Render Session Profile');

test('render user profile', assert => {
    // arrange
    const lineItem = {
        id: 'cafe-latte',
        quantity: 12,
    };
    // act
    const drink = findDrink(drinks, lineItem.id);
    const expected = '<div class="result-item"><img class="results-image" src="../assets/coffee/cafelatte.png"><p>12 Cafè Latte</p></div>';

    const dom = renderSessionProfileLine(lineItem, drink);
    const html = dom.outerHTML;
    // assert
    assert.equal(html, expected);
});