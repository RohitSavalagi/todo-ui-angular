import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header';
import { TodoComponent } from './components/todo/todo';

@Component({
    selector: 'app-root',
    imports: [HeaderComponent, TodoComponent],
    templateUrl: './app.html',
    styleUrl: './app.less',
})
export class App {}
