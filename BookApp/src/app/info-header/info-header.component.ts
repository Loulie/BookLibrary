import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit {

  private login = false;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {
  }

  public toggleLogin() {
    if (this.login === false) {
      document.getElementById('login').classList.remove('fadeOut');
      document.getElementById('login').classList.add('fadeIn');
    } else {
      document.getElementById('login').classList.remove('fadeIn');
      document.getElementById('login').classList.add('fadeOut');
    }
    this.login = !this.login;
  }
}
