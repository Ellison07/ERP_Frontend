import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-dotnet',
  templateUrl: './dotnet.component.html',
  styleUrls: ['./dotnet.component.css']
})
export class DotnetComponent implements OnInit{
  employees!: Employee[];
  
  constructor(private employeeService:EmployeeService,
    private router: Router) { }
  
  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data.filter(employee => employee.department === '.NET'&& employee.role !== 'admin');
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
}

