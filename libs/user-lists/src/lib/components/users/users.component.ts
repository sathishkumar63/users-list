import { Component, OnInit } from '@angular/core';
import { FilterOption } from '../../models';
import { UsersService } from '../../services';

@Component({
  selector: 'users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userList: any = [];
  filterProperty = 'name';
  filterValue = '';
  options: FilterOption[] = [
    {
      value: 'name',
      text: 'Name',
    },
    {
      value: 'username',
      text: 'User Name',
    },
    {
      value: 'email',
      text: 'Email',
    },
    {
      value: 'phone',
      text: 'Phone',
    },
    {
      value: 'website',
      text: 'Website',
    },
  ];

  constructor(private userService: UsersService) {}

  ngOnInit() {
    /** `subscribe` actually initiates the call to the server **/
    this.userService.getJSON().subscribe((data) => {
      this.userList = data;
    });
  }
}
