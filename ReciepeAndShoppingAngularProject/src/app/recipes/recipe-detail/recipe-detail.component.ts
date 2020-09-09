import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: Recipe;
  private recipeId: number;

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) {

  }

  ngOnInit(): void {
    // const index = +this.activatedRoute.snapshot.params["id"];
    this.route.params.
      subscribe((params: Params) => {
        this.recipeId = +params["id"];
        this.recipe = this.recipeService.getRecipeByIndex(this.recipeId);
      })
  }


  addRecipeToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients)
  }

  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
}
