import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName!: string;
  employee: Employee = new Employee();

  constructor(
    private route: ActivatedRoute,
    private employeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.userName = this.route.snapshot.params['username']; 
    this.employeService
      .getEmployeeByUserName(this.userName)
      .subscribe((data: Employee) => {
        this.employee = data;
      });
  }
  }
