import { Component, OnInit, Input  } from '@angular/core';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent {

    @Input() book: any;

    onClick(bookId: string) {
        // this.router.navigate(['search', form.value]);
        console.log("selected")
    }

}
