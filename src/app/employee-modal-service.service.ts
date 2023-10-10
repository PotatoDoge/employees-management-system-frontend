import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EmployeeModalServiceService {
  private baseUrl = 'http://localhost:8080/v1/employees';

  constructor(private httpClient: HttpClient) {}

  createEmployee(formData: any) {
    const url = `${this.baseUrl}`;
    return this.httpClient.post(url, formData);
  }
}
