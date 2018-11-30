import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Book } from '../Book';

@Component({
  selector: 'app-book-description',
  templateUrl: './book-description.component.html',
  styleUrls: ['./book-description.component.css']
})
export class BookDescriptionComponent implements OnInit {

  public selectedBook: Book;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      this.selectedBook = item;
    });
  }

}
