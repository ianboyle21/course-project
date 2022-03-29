import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project';
  loadedFeature = 'recipe';

  toggleFeature(feature: string) {
    this.loadedFeature = feature;
  }
}
