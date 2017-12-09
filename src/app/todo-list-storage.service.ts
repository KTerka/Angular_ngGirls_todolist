import { Injectable } from '@angular/core';

const defaultList = [
  { title: 'install NodeJS' },
  { title: 'install Angular CLI' },
  { title: 'create new app' },
  { title: 'serve app' },
  { title: 'develop app' },
  { title: 'deploy app' },
];

const storageName = 'aah_todo_list';

@Injectable()
export class TodoListStorageService {

  private todoList;

  constructor() {
    this.todoList = JSON.parse(localStorage.getItem(storageName)) || defaultList;
  }

  // get items
  get() {
    return [...this.todoList];
  }

  // add a new item
  post(item) {
    this.todoList.push(item);
    return this.update();
  }

  // update an item
  put(item, changes) {
    Object.assign(this.todoList[this.findItemIndex(item)], changes);
    return this.update();
  }

  // remove an item
  destroy(item) {this.todoList.splice(this.findItemIndex(item), 1);
    return this.update();}

  private update() {
    localStorage.setItem(storageName, JSON.stringify(this.todoList));

    return this.get();
  }

  private findItemIndex(item) {
    return this.todoList.indexOf(item);
  }



}