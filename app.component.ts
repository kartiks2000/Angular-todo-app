import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todolist = [];
  x;

  deletingit(e){
    console.log("id id :  ",e);
    this.x = [...this.todolist];
    this.x.map((i,idx) => {
      if(i.id == e){
        if(idx == 0){
          this.todolist.shift();
        }
        else{
            this.todolist.splice(idx,1);      
        }
      }
    });
  }

  addit(e){
    this.todolist.unshift(e);
  }
}  
