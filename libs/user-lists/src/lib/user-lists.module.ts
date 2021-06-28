import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './components';
import { UsersService } from './services';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './pipes';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule],
  declarations: [UsersComponent, FilterPipe],
  providers: [UsersService],
  exports: [UsersComponent],
})
export class UserListsModule {}
