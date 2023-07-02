import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor( private http:HttpClient ) { }

    getBooks() {
        return this.http.gethttps://www.googleapis.com/books/vl/volumes?g=trees
    }

}
