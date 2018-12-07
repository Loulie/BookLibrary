import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

  public home(): void {
    this.sharedDataService.resetBook();
  }

}
