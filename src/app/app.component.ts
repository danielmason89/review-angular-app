import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

//import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string | undefined;

  get selectedUser() {
    return this.users.find((user) => user.id == this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
  }
}

// <li *ngFor="let user of users">
//       <app-user [user]="user" (select)="onSelectUser($event)" />
//     </li>

// <app-tasks *ngIf="selectedUser; else fallback" [name]="selectedUser!.name" />
//   <ng-template #fallback>
//     <p id="fallback">Select a User to see their Tasks.</p>
//   </ng-template>
