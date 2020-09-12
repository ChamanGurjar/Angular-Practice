import { Component, OnDestroy, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/service/recipe.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = []
  recipeChangeSubscription: Subscription;

  constructor(private recipeService: RecipeService) { }


  ngOnInit(): void {
    this.recipeChangeSubscription = this.recipeService.recipeChanged.subscribe(recipes => {
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipeChangeSubscription.unsubscribe();
  }

}
