import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../todo-list.service';
@Component({
  selector: 'todo-list-manager',
  template: `
  <div class='todo-app'>
      <h1>
      {{ title | uppercase }}
      </h1>
      <todo-input class='todo-add' (submit)="addItem($event)"></todo-input>
    <ul>
    <li *ngFor="let item of todoList">
      <todo-item [todoItem]="item" (remove)="removeItem($event)"></todo-item>
    </li>
    </ul>
  </div>`,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
   title = 'My todo app';
  todoList: any;
  
  addItem(item:string) {
    this.todoList = this.todoListService.addItem({ title:item });
    console.log(this.todoList);
  }
    constructor(private todoListService:TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  removeItem(item) {
    this.todoList = this.todoListService.removeItem(item);
  }

}
