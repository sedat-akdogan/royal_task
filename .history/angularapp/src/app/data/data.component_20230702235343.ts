import { Component, OnInit, Input  } from '@angular/core';

@Component({
    selector: 'app-data',
    templateUrl: './data.component.html',
    styleUrls: ['./data.component.css']
})
export class DataComponent {

    @Input() book: any;

    onClick(form: Ng) {
        this.router.navigate(['search', form.value]);
    }

}
