import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { Employee } from './domain/employee/employee';

@Injectable()
export class SearchService {

  baseUrl: string = 'http://marmita.idsgeo.com/index.php/employee/get_like';
  queryUrl: string = '/';
  constructor(private http: Http) { }

  searchEntries(term: string): Observable<any> {
    if (term == "") {
      term = "00000000000";
    }
    return this.http
      .get(this.baseUrl + this.queryUrl + term)
      .map(res => res.json());
  }
}