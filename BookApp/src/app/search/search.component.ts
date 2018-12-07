import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public userInput;
  public selectedBook = null;

  constructor(private httpService: HttpService, public sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.sharedDataService.selectedBook$.subscribe( item => {
      this.selectedBook = item;
    });

  }


  queryBook() {
    this.httpService.queryBook(this.userInput);
  }

  queryRandom() {
    this.httpService.queryBook('12 rules for life');
  }
}
