import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe-One', 'Recipe-One Description goes here.',
      'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=700%2C636'),

    new Recipe('Recipe-Two', 'Recipe-Two Description goes here.',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg'),

    new Recipe('Recipe-Three', 'Recipe-Three Description goes here.',
      'https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2009/08/punjabi-chole-masala-recipe-1a.jpg')
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
