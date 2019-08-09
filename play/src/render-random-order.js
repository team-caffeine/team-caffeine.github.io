function renderRandomOrder(drink) {

    const label = document.createElement('label');
   
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'coffee';
    input.value = drink.id;
    
    label.appendChild(input);

    const drinkName = drink.name;
    const drinkLabel = document.createTextNode(' ' + drinkName);
    label.appendChild(drinkLabel);
    
    const breakLine = document.createElement('br');
    label.appendChild(breakLine);

    return label;
}  
export default renderRandomOrder;