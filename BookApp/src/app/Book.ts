export class Book {

    public title: string;
    public subTitle: string;
    public authors: string[];
    public publisher: string;
    public publishedDate: string;
    public description: string;
    public averageRating: number;
    public image: string;
    public price: number;

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
