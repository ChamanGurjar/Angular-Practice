import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model'

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>()

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

}