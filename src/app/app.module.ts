import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'
import { ROUTES } from './app.routes'
import { TopoComponent } from './topo/topo.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { CreateComponent } from './employee/create.component';
import { UploadComponent } from './employee/upload.component';
import { EmployeeComponent } from './employee/employee.component';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { MyDatePickerModule } from 'mydatepicker';
import { AutoComponent } from './autocomplete/auto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	  TopoComponent,
    RodapeComponent,
    CreateComponent,
    UploadComponent,
    EmployeeComponent,
    AutoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    MyDatePickerModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
