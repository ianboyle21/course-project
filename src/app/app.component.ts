import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  toggleShow = false;
  something(toggleShowRecipe) {
    this.toggleShow = toggleShowRecipe
    return this.toggleShow;
  }

  toggleFeature(feature: string) {
    console.log(feature)
    feature === "recipe" ? this.toggleShow = true : this.toggleShow = false;
  }
}
