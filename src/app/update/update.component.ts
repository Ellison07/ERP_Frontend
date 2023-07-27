import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id!: number;
  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data => {
        console.log(data);
        this.employee = data;
      },
      error => console.log(error)
    );
  }

  onSubmit(): void {
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      data => {
        // Handle success if needed
      },
      error => console.log(error)
    );
    this.goToEmployeeList();
  }

  goToEmployeeList(): void {
    this.router.navigate(['/admin']);
  }
}
