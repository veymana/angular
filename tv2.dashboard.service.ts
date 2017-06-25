import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Account} from './domain.account';
import 'rxjs/add/operator/map';
    
@Injectable()
export class AccountService {
    
    constructor(private http: Http) {}

getAccounts() {
    return this.http.get('./data/accounts.json')
    .map((res:Response) => <Account[]> res.json());
  }
}