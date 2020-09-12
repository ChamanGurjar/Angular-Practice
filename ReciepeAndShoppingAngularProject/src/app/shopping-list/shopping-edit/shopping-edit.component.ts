import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from 'src/app/service/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm: NgForm

  private editIngredientSubscription: Subscription;

  editMode: boolean = false;
  editItemIndex: number;
  itemToEdit: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit(): void {

    this.checkForEditRecipe()

  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editItemIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.editMode = false
    this.slForm.reset()
  }

  private checkForEditRecipe() {
    this.editIngredientSubscription = this.shoppingListService.ingredientToEdit.subscribe(index => {
      this.itemToEdit = this.shoppingListService.getIngredientByIndex(index);
      this.editItemIndex = index;
      this.editMode = true;

      this.slForm.setValue({
        name: this.itemToEdit.name,
        amount: this.itemToEdit.amount
      });
    })
  }

  ngOnDestroy(): void {
    this.editIngredientSubscription.unsubscribe();
  }

  deleteIngredient() {
    this.shoppingListService.deleteIngredient(this.editItemIndex)
    this.editMode = false
    this.slForm.reset()
  }

  resetForm() {
    this.slForm.reset();
  }

}
