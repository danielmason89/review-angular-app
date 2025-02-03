import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [UserComponent],
  imports: [SharedModule, CommonModule],
})
export class UserModule {}
