import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _selectedBook = new BehaviorSubject <Book> (null);
  public selectedBook$ = this._selectedBook.asObservable();

  constructor() { }

  set selectedBook(book: Object) {
    const newBook = this.createBook(book);
    this._selectedBook.next(newBook);
  }

  public resetBook() {
    this._selectedBook.next(null);
  }

  public createBook(book) {
    let tmp = book;
    if (book.length !== undefined) {
       tmp = book[0];
    }

    if (tmp.saleInfo.buyLink !== undefined) {
      return new Book(tmp.volumeInfo.title, tmp.volumeInfo.subtitle, tmp.volumeInfo.authors, tmp.volumeInfo.publisher,
        tmp.volumeInfo.publishedDate, tmp.volumeInfo.description, tmp.volumeInfo.averageRating,
         tmp.volumeInfo.imageLinks.thumbnail, tmp.saleInfo.buyLink);
    } else {
      return new Book(tmp.volumeInfo.title, tmp.volumeInfo.subtitle, tmp.volumeInfo.authors, tmp.volumeInfo.publisher,
        tmp.volumeInfo.publishedDate, tmp.volumeInfo.description, tmp.volumeInfo.averageRating,
         tmp.volumeInfo.imageLinks.thumbnail);
    }

  }
}
