import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})



export class ApiService {

    constructor( private http:HttpClient ) { }

    getBooks() {
        const API_KEY='AIzaSyDUvvrEu5dteaxqFlUpj2cHRd-kvzXCPn4';
        return this.http.get('https://www.googleapis.com/books/v1/volumes?q=trees='+API_KEY);
    }

}
