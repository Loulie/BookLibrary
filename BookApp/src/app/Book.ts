export class Book {

    public title: string;
    public subTitle: string;
    public authors: string[];
    public publisher: string;
    public publishedDate: string;
    public description: string;
    public averageRating: number;
    public image: string;

    constructor(title: string, subTitle: string, authors: string[], publisher: string, publishedDate: string,
         description: string, averageRating: number, image: string) {
             this.title = title;
             this.subTitle = subTitle;
             this.authors = authors;
             this.publisher = publisher;
             this.publishedDate = publishedDate;
             this.description = description;
             this.averageRating = averageRating;
             this.image = image;
         }
}
