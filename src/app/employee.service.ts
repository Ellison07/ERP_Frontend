import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Employee } from './employee';
import{ Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmployee(id: Number) {
    throw new Error('Method not implemented.');
  }
  private baseURL ="http://localhost:8080/api/v1/employees";
  
  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, employee);
  }

  getEmployeeById(id: Number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
  }

  updateEmployee(id: Number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteEmployee(id: Number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
  loginEmployee(userName: string, passWord: string): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseURL}/${userName}/${passWord}`);
  }
  getEmployeeByUserName(username: string): Observable<Employee> {
    return this.httpClient.get<Employee>(`${this.baseURL}/username/${username}`);
  }
  
  getEmployeesByDepartment(department: string): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}/employees/department/${department}`);
  }
  isAdmin(employee: Employee): boolean {
    return employee.role === 'admin';
  }
}