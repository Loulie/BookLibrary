import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public selectedBook;
  public image;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      console.log(item[0]);
      console.log(item[0].volumeInfo.imageLinks.thumbnail);
      this.selectedBook = item;
      this.image = item[0].volumeInfo.imageLinks.thumbnail;
     // document.getElementById('thumbnail').src = this.image;
    });
  }

}
