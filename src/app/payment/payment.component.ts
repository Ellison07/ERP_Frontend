import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Payment } from '../payment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { PaymentService } from '../payment.service';
import { HistoryService } from '../history.service';
import { History } from '../history'; 

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  id!: number;
  rating!: number; // Use lowercase 'number' instead of 'Number'
  leaves!: number; // Use lowercase 'number' instead of 'Number'
  startDate!: string; // Add the startDate property
  employee: Employee = new Employee();
  payment: Payment = new Payment();
  histories: History[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private paymentService: PaymentService,
    private historyService: HistoryService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    });
    this.paymentService.getPaymentByEmployeeId(this.id).subscribe(data => {
      this.payment = data;
    });

    this.historyService.getHistoriesByEmployee(this.id).subscribe(data => {
      this.histories = data;
    });
  }

  onSubmit(): void {
    this.router.navigate(['confirmation',this.id]);
  }
}
