import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';


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
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
  ngOnInit() {
  }
  setName(result){
    this.name = result.name;
  }
  goToAdd(){ this.router.navigate(['create']); }
  goToEmployee(){ this.router.navigate(['employee']); }
}
