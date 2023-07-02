import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'The Royal Library App';

    bookData: string;
    constructor(private api: ApiService) { }

    ngOnInit() {
        this.api.getBooks().subscribe((data) => {
            this.bookData = data;
        });
    }

}

