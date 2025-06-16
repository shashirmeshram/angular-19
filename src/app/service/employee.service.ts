import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';
import employeesData from '../data/employee.data';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }


  getEmployeeData(): Employee[] {
    return employeesData;
  }
}
