import { Observable, of } from 'rxjs';
export class MockUsersService {
  getJSON(): Observable<any> {
    return of();
  }
}
