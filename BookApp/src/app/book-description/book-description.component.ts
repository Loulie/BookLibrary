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
  public smallDescription;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      if (item !== null) {
        this.selectedBook = item;
        this.smallDescription = this.selectedBook.description.substr(0, 250) + ' ...';
      }
    });
  }

  public smallWindow(): boolean {
    if (window.outerWidth < 987) {
      return true;
    } else {
      return false;
    }
  }
}
