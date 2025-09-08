import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Todo } from '../models/todo';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class TodoServiceTs {
    private url: string = 'http://localhost:4000/todos';
    private http = inject(HttpClient);

    getAllTodos(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.url);
    }

    postTodo(todo: Partial<Todo>): Observable<Todo> {
        todo.title = (todo.title ?? '').trim();
        return this.http.post<Todo>(this.url, todo);
    }

    updateTodo(todo: Todo): Observable<Todo> {
        return this.http.put<Todo>(`${this.url}/${todo._id}`, todo);
    }

    deleteTodo(id: string): Observable<void> {
        return this.http.delete<void>(`${this.url}/${id}`);
    }
}
