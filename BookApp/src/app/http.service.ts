import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedDataService } from './shared-data.service';
import { TestingCompilerFactoryImpl } from '@angular/platform-browser-dynamic/testing/src/compiler_factory';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { }

  public queryBook(title: string): any {
    // tslint:disable-next-line:max-line-length
    this.http.get<{kind: string, totalItems: Int32Array, items: Array<{volumeInfo: {title: string}}>}>('https://www.googleapis.com/books/v1/volumes?q=' + title).subscribe( data => {

    let tmp = [...data.items];
    const firstBook = tmp[0];

      tmp = tmp.filter( item => {

        const tmpItem = item.volumeInfo.title.toUpperCase();
        const newTitle = title.toUpperCase();

        return tmpItem === newTitle;
      });

      if (tmp.length !== 0) {
        this.sharedDataService.selectedBook = tmp;
      } else {
        this.sharedDataService.selectedBook = firstBook;
      }
    });
  }
}
