import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-review',
  templateUrl: './book-review.component.html',
  styleUrls: ['./book-review.component.css']
})
export class BookReviewComponent implements OnInit {

  public reviews = [
    {
      author: 'Jocko Willink',
      // tslint:disable-next-line:max-line-length
      review: 'I was expecting more negativity much like some of Petersons videos online but glad to see how many others this book has helped and the much deserved praise it is getting! I suppose it makes sense, as those who actually read what he has to say rather than post their opinions based on click bait videos will see his message a lot more clearly. As most of the reviews have stated, this is a must read in our crazy modern times! I also recommend watching his Q&A at Oxford Union as well as the recent Joe Rogan podcasts. Enjoy!',
      // tslint:disable-next-line:max-line-length
      shortReview: 'I was expecting more negativity much like some of Petersons videos online but glad to see how many others this book has helped and the much deserved praise it is getting! ...'
    },
    {
      author: 'Jordan Peterson',
      // tslint:disable-next-line:max-line-length
      review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      // tslint:disable-next-line:max-line-length
      shortReview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...'
    },
    {
      author: 'Ben Shapiro',
      // tslint:disable-next-line:max-line-length
      review: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      // tslint:disable-next-line:max-line-length
      shortReview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum...'
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  smallWindow() {
    if (window.outerWidth < 987) {
      return true;
    } else {
      return false;
    }
  }

}
