import { Component, OnInit } from '@angular/core';
import {Todo} from './../../models/Todo';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];

  inputTodo:string="";

  constructor() { }

  ngOnInit(): void {
    this.todos = []
  }
  toggleDone (id:number) {
    this.todos.map((v, i) => {
      if (i== id) v.completed = !v.completed;

        return v;
    })
   } 
 
   deleteTodo(id:number) {
    this.todos = this.todos.filter((v,i) => i !==id);

   }

   addTodo () {
    this.todos.push({
      content:this.inputTodo,
      completed:false,
      date:new Date()
    });
  this.inputTodo="";

   }

   editTodo(id:number) {
     let title = this.todos[id].content
    let result = prompt("Edit Todo:", title)
    if (result !== null){
      this.todos[id].content = result;
   }
}
}

  /*  updateStatus(task){
        var _task = {
            _id:task._id,
            title: task.title,
            isDone: !task.isDone
        };

        this.taskService.updateStatus(_task).subscribe(data => {
            task.isDone = !task.isDone;
        });
    }*/

    /* compareDate = function (emp1: Todo, emp2: Todo) {  
    var emp1Date = new Date(emp1.date).getSeconds();  
    var emp2Date = new Date(emp2.date).getSeconds();  
     return emp1Date > emp2Date ? [emp1Date, emp2Date] = [emp2Date, emp1Date]: 1;    
}  */

  
 

