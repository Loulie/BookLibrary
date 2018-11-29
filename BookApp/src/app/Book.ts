export class Book {

    private title: string;
    private subTitle: string;
    private authors: string[];
    private publisher: string;
    private publishedDate: string;
    private description: string;
    private averageRating: number;
    private image: string;
    private price: number;

    constructor(title: string, subTitle: string, authors: string[], publisher: string, publishedDate: string,
         description: string, averageRating: number, image: string, price: number) {
             this.title = title;
             this.subTitle = subTitle;
             this.authors = authors;
             this.publisher = publisher;
             this.publishedDate = publishedDate;
             this.description = description;
             this.averageRating = averageRating;
             this.image = image;
             this.price = price;
         }
}
