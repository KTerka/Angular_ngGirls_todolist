import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'todo-item',
  template: `
    <div class='todo-item'>
    <button (click)="removeItem()">
    remove
  </button>
    {{ todoItem.title }}
    </div>
  `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() todoItem: any;
  @Output() remove:EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.todoItem);
  }

}
