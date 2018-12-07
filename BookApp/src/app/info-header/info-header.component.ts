import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
  }


  public resetSelectedBook(): void {
    console.log("test");
    this.sharedDataService.selectedBook = null;
  }
}
