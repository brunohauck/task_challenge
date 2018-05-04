import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  providers: [SearchService]
})

export class AutoComponent implements OnInit {
  results: Object;
  searchTerm$ = new Subject<string>();
  name: String;
  constructor(private router: Router, private searchService: SearchService) {
  }
  ngOnInit() {
    this.search()
      .subscribe(results => {
        this.results = results.results;
      });
  }
  search(): Observable<any> {
    return this.searchTerm$
      .debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchService.searchEntries(term));
  }
  onSearchKey(key: string) {
    this.searchTerm$.next(key)
  }
  setName(result){
    this.name = result.name;
  }

  goToAdd(){ this.router.navigate(['create']); }

  goToEmployee(){ this.router.navigate(['employee']); }
}
