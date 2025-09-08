import { Component, inject, model } from '@angular/core';
import { TodoServiceTs } from '../../services/todo';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatCardContent, MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatLineModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.less',
  imports: [
    MatListModule,
    MatCardModule,
    MatCardTitle,
    MatCardContent,
    CommonModule,
    MatCheckboxModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatLineModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class TodoList {
  private todoService = inject(TodoServiceTs);
  todos = this.todoService.getAllTodos();
  description = model('');

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
  }

  deleteTodo(todo: any) {
    // Remove from todoList OR call backend
  }

  save() {
    throw new Error('Method not implemented.');
  }
  updateItem() {
    throw new Error('Method not implemented.');
  }
}
