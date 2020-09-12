import { Recipe } from '../recipes/recipe.model'
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    private recipes: Recipe[] = [
        new Recipe('Recipe-One', 'Recipe-One Description goes here.',
            'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636',
            [new Ingredient("Msala", 1), new Ingredient("Paneer", 1.5)]),

        new Recipe('Recipe-Two', 'Recipe-Two Description goes here.',
            'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
            [new Ingredient("Chilli", 2), new Ingredient("Paneer", 1.5)]),

        new Recipe('Recipe-Three', 'Recipe-Three Description goes here.',
            'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2009/08/punjabi-chole-masala-recipe-1a.jpg',
            [new Ingredient("Paneer", 1.5), new Ingredient("Chilli", 2)])
    ]

    recipeChanged = new Subject<Recipe[]>()

    constructor(private shoppingListService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();            // to avoid refrence type.
    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

    getRecipeByIndex(index: number): Recipe {
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe) {
        console.log("Recipe to add => ", recipe)
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe) {
        console.log("Recipe to update => ", recipe)
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
    }

}