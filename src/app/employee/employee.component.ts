import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../domain/employee/employee';
import { Router } from '@angular/router';
import { CreateComponent } from './create.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  public data;  
  public url: string;
  public employees: Employee[];
  constructor(
         private _http: Http,
         private router: Router
        ) {

    this.data = {};
    this.data.response = '';			
	this.url = "http://marmita.idsgeo.com/index.php/employee/get_all"		
  }

  ngOnInit() {
    this.httpRequest();
  }
  httpRequest(){
    this._http
    .get(this.url)
    .map( res => res.json())
    .toPromise()
    .then( employees => {
        this.employees = employees;
        console.log(employees);
    })
    .catch(err =>{
        console.log(err);
    });

  }
  deleteEmployee(employee){
      var deleteUrl = "http://marmita.idsgeo.com/index.php/employee/delete";
      var data = JSON.stringify({ id: employee.id });
      this._http.post(deleteUrl, data)
        .subscribe( data => {
          var response = data["_body"];
          if(response == "deleted"){
            alert('Logical Delete on the database');
            this.httpRequest();
          }
        }, error =>{
          console.log("Ocorreu algum erro!");
        });
  }
  editEmployee(employee){
    this.router.navigate(['create', employee.id]);
  }

}
