const eachDrink = document.getElementsByClassName('each-drink');


for(let i = 0; i < eachDrink.length; i++) {
    const drink = eachDrink[i];
    const drinkDescription = drink.childNodes[5];
    drink.addEventListener('click', () => {
        drinkDescription.classList.remove('hidden');
        drink.classList.add('featured-drink');
        drink.addEventListener('mouseleave', () => {
            drinkDescription.classList.add('hidden');
            drink.classList.remove('featured-drink');
        });

    });
}

// function expandDrink() {
//     console.log(eachDrink.childNodes[2]);
// }

// eachDrink.addEventListener('click', () => {
//     console.log('help');
//     
// });

// eachDrink.addEventListener('click', () => {
//     console.log('test');
// })