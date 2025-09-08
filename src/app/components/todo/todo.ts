import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatFabButton, MatIconButton } from '@angular/material/button';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MAT_INPUT_CONFIG, MatFormField, MatInput } from '@angular/material/input';
import { ShowOnDirtyErrorStateMatcher } from '../../matchers/error.matcher';
import { TodoServiceTs } from '../../services/todo';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo',
  imports: [
    MatButton, MatSuffix, MatIconButton,
    MatIcon,MatInput, ReactiveFormsModule, MatFormField, CommonModule ,MatError, FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.less',
  animations: [
    trigger('openClose', [
      state('closed', style({
        height: '0px',
        opacity: 0,
        overflow: 'hidden'
      })),
      state('open', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('closed <=> open', [
        animate('300ms ease-in-out')
      ]),
    ]),
  ]
})
export class TodoComponent {
  isFormOpen = false;
  formControl = new FormControl('', [Validators.required]);
  matcher = new ShowOnDirtyErrorStateMatcher();
  todoSerivce = inject(TodoServiceTs);


  toggleForm() {
    this.formControl.reset();
    this.isFormOpen = !this.isFormOpen;
  }

  addTodo() {
    if (this.formControl.valid) {
      this.todoSerivce.postTodo({
        title: this.formControl.value!,
        completed: false
      }).subscribe({
        next: (todo: Todo) => {
          console.log('Todo added:', todo);
          this.formControl.reset();
          this.formControl.markAsPristine();
          this.formControl.markAsUntouched();
        },
        error: (err) => {
          console.error('Error adding todo:', err);
        }
      });
    }
  }
}
