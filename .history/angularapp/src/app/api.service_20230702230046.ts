import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})



export class ApiService {

    constructor( private http:HttpClient ) { }

    getBooks() {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const key=AIzaSyDUvvrEu5dteaxqFlUpj2cHRd-kvzXCPn4
        return this.http.get(proxyurl+'https://www.googleapis.com/books/vl/volumes?g=trees');
    }

}
