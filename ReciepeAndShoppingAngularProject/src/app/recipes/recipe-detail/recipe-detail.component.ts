import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  private recipeId: number;

  constructor(private activatedRoute: ActivatedRoute, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    // const index = +this.activatedRoute.snapshot.params["id"];
    this.activatedRoute.params.
      subscribe((params: Params) => {
        this.recipeId = +params["id"];
      })
    this.recipe = this.recipeService.getRecipeByIndex(this.recipeId - 1);
  }


  addRecipeToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }
}
