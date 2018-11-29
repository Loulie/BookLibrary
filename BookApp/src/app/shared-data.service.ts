import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private _selectedBook = new BehaviorSubject <Object> (null);
  public selectedBook$ = this._selectedBook.asObservable();

  constructor() { }

  set selectedBook(book: Object) {
    this._selectedBook.next(book);
  }
}
