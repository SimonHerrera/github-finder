import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username: string;
  private client_id = 'bc7dcd9f2761bbe4cdf3';
  private client_secret = 'ccfc18e5b6647778d47cbbee5b362a58becf22b5'

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'simonherrera';

  }

  getUser() {
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
    .map(res => res.json());

  }
}