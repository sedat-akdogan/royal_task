import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

const proxyurl = "https://cors-anywhere.herokuapp.com/";

export class ApiService {

    constructor( private http:HttpClient ) { }

    getBooks() {
        return this.http.get('https://www.googleapis.com/books/vl/volumes');
    }

}
