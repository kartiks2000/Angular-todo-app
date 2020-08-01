import { Component ,Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.css']
})
export class todosComponent {

    @Input('todoslist') todoslist;

    @Output('delinit') delinit = new EventEmitter();
    
    del(e){
        // console.log('todoss...',e);
        this.delinit.emit(e);
    }
}