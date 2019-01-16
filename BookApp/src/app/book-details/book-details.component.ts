import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';
import { Book } from '../Book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  public selectedBook: Book;
  public image = null;
  public rating;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      if (item !== null) {
        this.selectedBook = item;
        this.image = item.image;
      }
    });
  }

  public redirectToBuyPage(): void {
    window.open(this.selectedBook.buyLink);
  }
}
