import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router:Router) {}

  ngOnInit(): void {
      
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
    },
     error => console.log(error));

     
     this.goToEmployeeList();
  }

  goToEmployeeList(){
    this.router.navigate(['/login']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }
}
