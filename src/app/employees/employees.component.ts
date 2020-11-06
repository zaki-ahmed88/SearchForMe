import { employeeSearch } from './../models/employeesSearch';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { employees } from '../models/employees';
import { EmployeesService } from '../services/employees.service';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {

  dtTrigger: Subject<any> = new Subject();
  dtOptions: DataTables.Settings = {};
  Subscribe: Subscription;

  employeesList :  employees[];
  employeeSearch : employeeSearch;


  constructor(private employeesServices: EmployeesService)
  {
   /*  this.Subscribe = this.employeesServices.get()
      .subscribe(products => {
        this.filteredProducts = this.products = products;
        this.dtTrigger.next();
      }); */
  }
  getData()
  {
    this.employeesList = null;
    this.employeesServices.get().subscribe((data: any) =>
    {
       if(this.employeeSearch.name){
        this.Subscribe = this.employeesList = data.employees.filter(el => {

          return this.employeeSearch.name == el.fullName_FL;
        });
      }
      else if(this.employeeSearch.salary){
        this.Subscribe = this.employeesList = data.employees.filter(el => {

          return this.employeeSearch.salary == el.firstContractingSalary;
        });
      }
      else{
        this.employeesList = data.employees;

      }
      this.employeesList = data.employees;
      this.dtTrigger.next();


    });
  }
  ngOnInit()
  {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }


    this.employeeSearch = {
      name : '' ,
      hireDate : null,
      salary: null
    };
    this.getData();



  }

  ngOnDestroy(): void {
    this.Subscribe.unsubscribe();
    this.dtTrigger.unsubscribe();
  }


   search()
  {
    console.log(this.employeeSearch);
    this.getData();

  }




}
