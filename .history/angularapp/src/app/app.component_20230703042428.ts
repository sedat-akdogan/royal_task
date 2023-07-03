import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'The Royal Library';

    bookData: any;
    book: any;
    data: any;
    constructor(private api: ApiService) {
        this.data?.items?.find((_books: any) => this.book.id === bookId)
    }

    ngOnInit() {
        this.api.getBooks().subscribe((data: any) => {
            console.log(data);
            this.bookData = data?.items;
        });
    }

}
