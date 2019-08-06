export function findDrink(drinks, id) {
    for(let i = 0; i < drinks.length; i++){
        const drink = drinks[i];
        if(drink.id === id) {
            return drink;
        }
    }
    return null;
}