import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Employee } from '../domain/employee/employee';
import { Router } from '@angular/router';
import { UploadComponent } from './upload.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  public data;
  public http;
  public employee: Employee;
  private id: string;
  constructor(http:Http, private router: Router, private rout: ActivatedRoute) { 
    this.data = {};
    this.data.response = '';
    this.http = http;
    this.id = rout.snapshot.params['id'];
    this.employee = new Employee (null, null, null, null, null, null, null, null, null);
  }

  ngOnInit() {
    if(this.id){
      this.requestHttpEmployee();
      console.log(this.id)
    }
    else{
      console.log("NO");
    }
  }
  submit(){
    if(
      !this.employee.first_name ||
      !this.employee.surname ||
      !this.employee.email ||
      !this.employee.date_birth ||
      !this.employee.mobile_phone ||
      !this.employee.position
    ){
      alert("All fields are riquered on this form!");
    }else{
      if(this.id){
        console.log("Edit");
        var link = 'http://marmita.idsgeo.com/index.php/employee/edit';
      }
      else{
        console.log("Create");
        var link = 'http://marmita.idsgeo.com/index.php/employee/add';
      }
      
      var data = JSON.stringify(this.employee);
      this.http.post(link, data)
        .subscribe( data => {
          this.data.response = data._body;
          var validate = this.data.response.split("|");
          if(validate[1] == "sucesso"){
            this.router.navigate(['upload', validate[0]]);
          }
        }, error =>{
          console.log("Error!");
        });

    }
  }
  requestHttpEmployee(){
    this.http
      .get('http://marmita.idsgeo.com/index.php/employee/get_employee_by_id/'+this.id)
      .map(res => res.json())
      .toPromise()
      .then(employee => {
        console.log(employee)
        this.employee = employee;
        console.log(this.employee.first_name);
      })
      .catch(err => {
        console.log(err);  
      });
  }
}
