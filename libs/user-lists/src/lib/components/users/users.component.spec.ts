import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { mockUsers } from '../../models';
import { FilterPipe } from '../../pipes';
import { MockUsersService, UsersService } from '../../services';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let service: UsersService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersComponent, FilterPipe],
      imports: [ReactiveFormsModule, FormsModule],
      providers: [
        {
          provide: UsersService,
          useClass: MockUsersService,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    service = TestBed.inject(UsersService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  test('should create snapshot', () => {
    component.userList = mockUsers;
    fixture.detectChanges();
    const debugElement: HTMLElement = fixture.nativeElement;
    expect(debugElement).toMatchSnapshot();
  });

  describe('ngOnInit', () => {
    test('should make expected call', () => {
      // arrange
      jest.spyOn(service, 'getJSON');
      // act
      component.ngOnInit();
      // assert
      expect(service.getJSON).toBeCalled();
    });

    test(
      'should get users when calling getJSON()',
      waitForAsync(() => {
        // arrange
        jest.spyOn(service, 'getJSON').mockReturnValue(of(mockUsers));
        // act
        service.getJSON().subscribe((data) => {
          component.userList = data;
        });
        // assert
        expect(component.userList).toEqual(mockUsers);
      })
    );
  });
});
