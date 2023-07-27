import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  private baseURL = 'http://localhost:8080/api/v2';

  constructor(private httpClient: HttpClient) { }

  getHistoriesByEmployee(employeeId: Number): Observable<History[]> {
    return this.httpClient.get<History[]>(`${this.baseURL}/employees/${employeeId}/histories`);
  }

  createHistory(employeeId: Number, history: History): Observable<History> {
    return this.httpClient.post<History>(`${this.baseURL}/employees/${employeeId}/histories`, history);
  }

}
