function renderSessionProfileLine(lineItem, drink) {
    const div = document.createElement('div');
    div.className = 'result-item';

    const image = document.createElement('img');
    image.className = 'results-image';
    image.src = '../' + drink.image;
    div.appendChild(image);

    const p = document.createElement('p');
    const quantityCell = lineItem.quantity;
    p.textContent = quantityCell;
    const drinkName = drink.name;
    p.textContent = quantityCell + ' ' + drinkName;
    div.appendChild(p);

    return div;
}

export default renderSessionProfileLine;