import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { employees } from '../models/employees';
import { DataServiceService } from './data-service.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService extends DataServiceService <employees>{

  constructor(http: HttpClient) {
    super('http://localhost:3000/data', http)
  }
}
