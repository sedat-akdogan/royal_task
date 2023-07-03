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
    bookDetails: any;
    constructor(private api: ApiService) {
        this.bookDetails = this.api.getBooks().
    }

    ngOnInit() {
        this.api.getBooks().subscribe((data: any) => {
            console.log(data);
            this.bookData = data?.items;
        });
    }

}
