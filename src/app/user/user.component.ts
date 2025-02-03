import {
  Component,
  computed,
  EventEmitter,
  Input,
  input,
  Output,
  output,
} from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";
//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [CardComponent],
})
export class UserComponent {
  //  old, current approach using event emitter
  //@Input({ required: true }) avatar!: string;
  //@Input({ required: true }) name!: string;
  //@Input({ required: true }) id!: string;
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // are able to use generics here for extra type safety
  @Output() select = new EventEmitter<string>();

  // new, future/current approach using signals
  // these inputs are read-only
  // avatar = input.required<string>();
  // name = input.required<string>();

  //select = output<string>();

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  // imagePath = computed(() => {
  //   return 'assets/users/' + this.avatar();
  // });

  // option 1# for passing state: using zone.js, selectedUser = DUMMY_USERS[randomIndex];
  // option 2# for passing state: using signals without using zone.js
  //selectedUser = signal(DUMMY_USERS[randomIndex]);

  //A part of option 1#:
  // get imagePath() {
  //  return 'assets/users/' + this.selectedUser.avatar;
  //}

  //A part of option 2#, how to compute a value when using signals with computed function
  //imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  onSelectUser() {
    this.select.emit(this.user.id);

    //const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // A part of option 2#
    //this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //A part of option #1: this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
