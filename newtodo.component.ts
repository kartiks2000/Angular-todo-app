import { Component, Output, EventEmitter } from '@angular/core';

import { taskinit } from '../todo.model';

@Component({
    selector: 'app-newtodo',
    templateUrl: './newtodo.component.html',
    styleUrls: ['./newtodo.component.css']
})
export class newtodoComponent {

    @Output('adding') adding = new EventEmitter(); 

    tsk = '';
    x: taskinit;

    clicked(){
        this.x = new taskinit(this.tsk);
        this.adding.emit(this.x);
        this.tsk='';
    }
}