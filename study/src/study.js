const eachDrink = document.getElementsByClassName('each-drink');

for(let i = 0; i < eachDrink.length; i++) {
    const drink = eachDrink[i];
    const drinkDescription = drink.childNodes[5];
    drink.addEventListener('click', () => {
        drink.classList.add('featured-drink');
        setTimeout(function() { 
            drinkDescription.classList.remove('hidden');
        }, 200);
        drink.addEventListener('mouseleave', () => {
            drinkDescription.classList.add('hidden');
            drink.classList.remove('featured-drink');
        });
    });
}