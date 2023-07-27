import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseURL = 'http://localhost:8080/api/v3/payments';

  constructor(private httpClient: HttpClient) { }
  
  getPaymentByEmployeeId(employeeId: Number): Observable<Payment> {
    return this.httpClient.get<Payment>(`${this.baseURL}/employee/${employeeId}`);
  }
}



  // getPaymentById(paymentId: Number): Observable<Payment> {
  //   return this.httpClient.get<Payment>(`${this.baseURL}/${paymentId}`);
  // }

  // createPayment(payment: Payment): Observable<Payment> {
  //   return this.httpClient.post<Payment>(`${this.baseURL}`, payment);
  // }

  // updatePayment(paymentId: Number, payment: Payment): Observable<Payment> {
  //   return this.httpClient.put<Payment>(`${this.baseURL}/${paymentId}`, payment);
  // }

  // deletePayment(paymentId: Number): Observable<void> {
  //   return this.httpClient.delete<void>(`${this.baseURL}/${paymentId}`);
  // }
