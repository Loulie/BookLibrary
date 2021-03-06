import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';

import { HttpClientModule } from '@angular/common/http';

import { SharedDataService } from './shared-data.service';
import { HttpService } from './http.service';

import { FormsModule } from '@angular/forms';
import { BookInfoComponent } from './book-info/book-info.component';
import { InfoHeaderComponent } from './info-header/info-header.component';
import { NavComponent } from './nav/nav.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookDescriptionComponent } from './book-description/book-description.component';
import { BookReviewComponent } from './book-review/book-review.component';
import { UserInterfaceComponent } from './user-interface/user-interface.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    BookInfoComponent,
    InfoHeaderComponent,
    NavComponent,
    BookDetailsComponent,
    BookDescriptionComponent,
    BookReviewComponent,
    UserInterfaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SharedDataService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
