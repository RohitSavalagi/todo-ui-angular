import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Component, OnInit } from '@angular/core';
import { TodoServiceTs } from '../../services/todo';
import { Todo } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-todo-list',
    templateUrl: 'todo-list.html',
    styleUrls: ['todo-list.less'],
    imports: [
        MatCardModule,
        CommonModule,
        MatButtonModule,
        MatListModule,
        MatCheckboxModule,
        MatIcon,
        MatProgressBarModule,
        MatIconButton,
        FormsModule,
    ],
})
export class TodoListComponent implements OnInit {
    todos: Todo[] = [];
    loading = true;

    constructor(private todoService: TodoServiceTs) {}

    ngOnInit(): void {
        this.fetchTodos();
    }

    fetchTodos(): void {
        this.todoService.getAllTodos().subscribe({
            next: data => {
                this.todos = data;
                this.loading = false;
            },
            error: () => {
                this.loading = false;
            },
        });
    }

    toggleComplete(todo: Todo): void {
        const updated = { ...todo, completed: !todo.completed };
        this.todoService.updateTodo(updated).subscribe({
            next: t => {
                todo.completed = t.completed;
            },
        });
    }

    deleteTodo(id: string): void {
        this.todoService.deleteTodo(id).subscribe({
            next: () => {
                this.todos = this.todos.filter(t => t._id !== id);
            },
        });
    }

    editTodo(): void {
        console.log('Edit todo clicked');
    }
}
