import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit{
  employees!: Employee[];
  
  constructor(private employeeService:EmployeeService,
    private router: Router) { }
  
  ngOnInit(): void{
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data.filter(employee => employee.department === 'Java' && employee.role !== 'admin');
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

