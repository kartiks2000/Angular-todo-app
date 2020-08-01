import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class todoComponent {

    @Input('task') task;
    @Input('id') id;

    @Output() deleting = new EventEmitter();

    delreq(){
        this.deleting.emit(this.id);
    }
}