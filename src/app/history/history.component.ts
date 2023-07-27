import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { HistoryService } from '../history.service';
import { Employee } from '../employee';
import { History } from '../history';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  id!: Number;
  employee: Employee = new Employee();
  histories: History[] = [];

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });

    this.historyService.getHistoriesByEmployee(this.id).subscribe(data => {
      this.histories = data;
    });
  }
  onSubmit(): void {
  
  }
}
