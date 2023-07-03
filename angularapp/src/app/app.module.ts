import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
    declarations: [
        AppComponent,
        DataComponent,
        DetailsComponent
    ],
    imports: [
        BrowserModule, 
        HttpClientModule, 
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
