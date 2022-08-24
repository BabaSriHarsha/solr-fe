// import { Employee } from 'src/app/models/employee';
// import { Employee } from './../models/employee';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  empdata = new BehaviorSubject<any>('');

  getEmployees(): Observable<Employee[]> {
    return this.empdata.asObservable();
  }
  setEmployees(employees: Employee[]): void {
    this.empdata.next(employees);
  }

  getAllValues = () => {
    let url = 'http://localhost:8802/get-all-docs/';
    return this._httpClient.get<any>(url);
  };

  getTheSearch = (searchTerm: string): Observable<Employee[]> => {
    let url = 'http://localhost:8802/search/';
    return this._httpClient.get<any>(url.concat(searchTerm));
  };
  getAllSkills = () => {
    let url = 'http://localhost:8802/skills';
    return this._httpClient.get<any>(url);
  };

  addEmployee = (employee: any): Observable<string> => {
    let url = 'http://localhost:8802/create';
    console.log('Hello');
    return this._httpClient.post<any>(url, employee, {
      responseType: 'text' as 'json',
    });
  };

  // createRequest = (data: Request): Observable<void> => {
  //   const baseURL = 'http://localhost:9092/requests';
  //   return this._httpClient.post<void>(baseURL, data, {
  //     responseType: 'text' as 'json',
  //   });
  // };
}
