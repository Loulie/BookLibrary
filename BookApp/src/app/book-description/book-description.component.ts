import { Component, OnInit, HostListener } from '@angular/core';
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
  public mobile = false;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.sharedDataService.selectedBook$.subscribe( item => {
      if (item !== null) {
        this.selectedBook = item;
        this.smallDescription = this.selectedBook.description.substr(0, 250) + ' ...';
      }
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    console.log(event.target.innerWidth);
    if (event.target.innerWidth < 987) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
