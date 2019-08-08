import { findDrink } from '../src/util.js';
import drinks from '../data/drinks.js';
import renderAllTimeProfile from '../profile/all-time-user-render.js';

const test = QUnit.test;

QUnit.module('Render Profile');

test('render user profile', assert => {
    const lineItem = {
        id: 'americano',
        quantity: 12,
    };
    
    const drink = findDrink(drinks, lineItem.id);
    const expected = '<div id="all-time-drinks" class="result-item"><img class="results-image" src="../assets/coffee/americano.png"><p>12 Americano</p></div>';

    const dom = renderAllTimeProfile(lineItem, drink);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});