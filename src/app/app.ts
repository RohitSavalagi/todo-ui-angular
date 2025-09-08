import { Component } from '@angular/core';
import { TodoList } from "./components/todo-list/todo-list";
import { HeaderComponent } from "./components/header/header";
import { TodoComponent } from "./components/todo/todo";

@Component({
  selector: 'app-root',
  imports: [TodoList, HeaderComponent, TodoComponent],
  templateUrl: './app.html',
  styleUrl: './app.less'
})
export class App {
}
