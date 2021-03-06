import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { CreateComponent } from './employee/create.component'
import { UploadComponent } from './employee/upload.component'
import { EmployeeComponent } from './employee/employee.component'
import { AutoComponent } from './autocomplete/auto.component';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'create', component: CreateComponent },
    { path: 'auto', component: AutoComponent },
    { path: 'create/:id', component: CreateComponent },
    { path: 'upload/:id', component: UploadComponent }
]