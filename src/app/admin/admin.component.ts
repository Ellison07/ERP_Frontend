import { Component } from '@angular/core';
import {OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit{
  employees!: Employee[];
  
  constructor(private employeeService:EmployeeService,
    private router: Router) { }
  
  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data =>{
      this.employees = data;
    });
  }
 updateEmployee(id : Number){
    this.router.navigate(['update', id]);
  }
 deleteEmployee(id: Number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      console.log(data);
      this.getEmployees();
    })
  }
  employeeDetails(id : Number){
    this.router.navigate(['employeelist', id]);

  }
  goToPayment(id : Number){
    this.router.navigate(['payment',id]);
  }
  goToHistory(id : Number){
    this.router.navigate(['history',id]);
  }
}

