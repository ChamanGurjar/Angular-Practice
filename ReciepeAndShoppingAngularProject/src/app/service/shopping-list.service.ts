import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()
    ingredientToEdit = new Subject<number>()

    private ingredients: Ingredient[] = [new Ingredient('Apple', 1)];

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientsChanged.next(this.getIngredients())
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.getIngredients())
    }

    getIngredientByIndex(index: number): Ingredient {
        return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.getIngredients());
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1)
        this.ingredientsChanged.next(this.getIngredients());
    }

}