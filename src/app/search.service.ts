import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Injectable()
export class SearchService {
    
  baseUrl: string = 'http://marmita.idsgeo.com/index.php/employee/get_like';
  queryUrl: string = '/';
  //baseUrl: string = 'https://api.cdnjs.com/libraries';
  //queryUrl: string = '?search=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    if(term == ""){
      term = "00000000000";
      return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .map(res => res.json());
    }else{
    return this.http
        .get(this.baseUrl + this.queryUrl + term)
        .map(res => res.json());
    }    
  }
}