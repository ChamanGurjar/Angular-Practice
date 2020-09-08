import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ReciepeAndShoppingAngularProject';
  featureSelected = 'recipe'


  onNavigate(feature: string) {
    this.featureSelected = feature
  }
}
