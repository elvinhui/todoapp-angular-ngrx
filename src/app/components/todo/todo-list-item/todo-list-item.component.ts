import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.scss']
})
export class TodoListItemComponent implements OnInit {

  
  @Input() todo;

  @Output() created = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
  }

  createTodo(todo){
    console.log(todo)
    this.created.emit(todo)
  }
}
