import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HistoryService } from '../history.service';
import { History } from '../history';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  id!: number;
  rating!: number;
  leaves!: number;
  startDate!: string;
  salary!: number;
  salaryBaseOnPerformance!: number;
  employee: Employee = new Employee();
  histories: History={
    dates: '',
    leaves: 0,
    rating: 0,
    salary: 0,
    salaryBaseOnPerformance: 0
  };
  
  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private historyService: HistoryService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe((data) => {
      this.employee = data;
    });
    this.salary = 40000;
  }

  onSubmit(): void {
    
    const rating = this.rating;
    const leaves = this.leaves;
    const start = new Date(this.startDate);
    const end = new Date(start.getFullYear(), start.getMonth() + 1, 0); 
    const salaryAmount = this.salary; 
    const daysInMonth = end.getDate();
    const workingDays = daysInMonth - leaves;
    if (rating === 10 && leaves === 0) {
      this.salaryBaseOnPerformance = salaryAmount;
    } else {
      const performanceRatio = rating / 10;
      this.salaryBaseOnPerformance = salaryAmount * performanceRatio * (workingDays / daysInMonth);
    }

  }

  submitSalary(): void {
    const currentDate = new Date(); 
  const formattedDate = currentDate.toISOString();
    const newHistory: History = {
      dates: formattedDate,

      leaves: this.leaves,
      rating: this.rating,
      salary: this.salary,
      salaryBaseOnPerformance: this.salaryBaseOnPerformance
    };
    this.historyService.createHistory(this.id, newHistory).subscribe(data => {
      this.histories = data;
      console.log(this.histories);
      this.goToHistory(this.id);
    },(error)=>{
      console.log(error);
    });

    
  }  
  goToHistory(id : Number){
    this.router.navigate(['history',id]);
  }
}

