import { HttpClient } from '@angular/common/http';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { mockUsers } from '../../models';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let http: HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(UsersService);
    http = TestBed.inject(HttpClient);
  });

  test('should be created', () => {
    expect(service).toBeTruthy();
  });

  test(
    'should get users when calling getJSON()',
    waitForAsync(() => {
      // arrange
      jest.spyOn(http, 'get').mockImplementation(() => of(mockUsers));
      // act
      service.getJSON().subscribe((data) => {
        // assert
        expect(data).toEqual(mockUsers);
      });
      // assert
      expect(http.get).toHaveBeenCalledWith(
        'https://jsonplaceholder.typicode.com/users'
      );
    })
  );
});
