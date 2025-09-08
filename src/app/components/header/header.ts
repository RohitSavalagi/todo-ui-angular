import { Component } from '@angular/core';
import { MatButtonModule, MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [
    MatIcon,
    MatIconButton,
    MatButtonModule,
  ],
  templateUrl: 'header.html',
  styleUrl: 'header.less'
})
export class HeaderComponent {
}
