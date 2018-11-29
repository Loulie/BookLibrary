import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public selectedBook = null;

  constructor(public sharedDataService: SharedDataService) { }

  ngOnInit() {

    this.sharedDataService.selectedBook$.subscribe( item => {
      this.selectedBook = item;
    });
  }


  showLogin() {
    const element = document.getElementById('loginWrapper');

    if (element.classList.value === '' || element.classList.value === 'fadeOut') {
      element.className = 'fadeIn';
    } else {
      element.className = 'fadeOut';
    }
  }

  showFooter() {
    const footer = document.getElementById('footer');

    if ( footer.classList.contains('slideFooterUp')) {
      footer.classList.remove('slideFooterUp');
      footer.classList.add('slideFooterDown');
    } else {
      footer.classList.remove('slideFooterDown');
      footer.classList.add('slideFooterUp');
    }
  }
}
