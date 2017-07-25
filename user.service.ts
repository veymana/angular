import { UserDetails } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { ApplicationError } from './common/base-app.error'


@Injectable()
export class UserService {

  constructor(private http: Http) { }
  private endPoint = "http://jsonplaceholder.typicode.com/posts";

  getUsers(): Observable<UserDetails[]> {
    return this.http.get(this.endPoint)
      .map(response => response.json() as UserDetails[])
      .catch(this.processErrors);
  }

  private processErrors(error: Response) {
    if (error.status === 400) {
      return Observable.throw(new ApplicationError("324", "sample error message"));
    }
    else
      return Observable.throw(error);
  }

}
