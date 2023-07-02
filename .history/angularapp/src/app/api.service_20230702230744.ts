import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})



export class ApiService {

    constructor( private http:HttpClient ) { }

    getBooks() {
        const API_KEY='AIzaSyDUvvrEu5dteaxqFlUpj2cHRd-kvzXCPn4';
        return this.http.get('https://www.googleapis.com/books/vl/volumes?g=trees&key='+API_KEY);
    }

}
