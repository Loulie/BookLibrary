import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  showLogin() {
    const element = document.getElementById('loginWrapper');

    console.log(element.classList.value);
    if (element.classList.value === '' || element.classList.value === 'fadeOut') {
      element.className = 'fadeIn';
    } else {
      element.className = 'fadeOut';
    }
  }
}
