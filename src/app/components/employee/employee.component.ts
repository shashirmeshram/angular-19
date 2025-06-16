import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Employee } from '../../model/employee.model';
import { TableModule } from 'primeng/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SelectButton } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

interface Column {
  field: string;
  header: string;
}
@Component({
  selector: 'app-employee',
  imports: [NgFor, TableModule, MatSlideToggleModule, NgIf,
    MatButtonModule,
    MatCardModule, TableModule,
    TagModule,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    MultiSelectModule,
    SelectModule,
    HttpClientModule,
    CommonModule
    //SelectButton,
    //CommonModule
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  employeesData: Employee[] = [];
  cols!: Column[];

  sizes!: any[];

  selectedSize: any = undefined;
  constructor(private employeeService: EmployeeService) {
  }
  // Additional methods and properties can be defined here
  ngOnInit() {
    // This method is called after the component is initialized
    this.employeesData = this.employeeService.getEmployeeData();

    this.sizes = [
      { name: 'Small', value: 'small' },
      { name: 'Normal', value: undefined },
      { name: 'Large', value: 'large' }
    ];

    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'zip', header: 'Postal Code' },
      { field: 'country', header: 'Country' },
      { field: 'salary', header: 'Salary' },
    ];
  }
}
