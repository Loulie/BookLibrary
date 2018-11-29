import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public selectedBook;
  public image = null;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      console.log(item);
      if (item !== [] && item !== null) {
        console.log(item);
        this.selectedBook = item;
        this.image = item[0].volumeInfo.imageLinks.thumbnail;
      }
    });
  }

}
