const ingredientButton = document.getElementsByClassName('ingredient-buttons');

let ingredient = '';


if(ingredient === 'espresso') {
    console.log('true');
}
else {
    console.log('false');
}

detectIngredient(ingredientButton);

function detectIngredient(ingredientButton) {
    for(let i = 0; i < ingredientButton.length; i++) {
        ingredientButton[i].addEventListener('click', function() {
            ingredient = ingredientButton[i].id;
        });
    }
    return ingredient;
}