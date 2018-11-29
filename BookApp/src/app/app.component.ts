import { Component } from '@angular/core';
import { SharedDataService } from './shared-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedBook = null;

  constructor(public sharedDataService: SharedDataService) {
    this.sharedDataService.selectedBook$.subscribe( item => {
      this.selectedBook = item;
    });
  }

  title = 'BookApp';

}
