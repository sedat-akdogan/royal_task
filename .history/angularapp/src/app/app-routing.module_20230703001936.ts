import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Component } from './app.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
