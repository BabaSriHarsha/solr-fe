import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-empolyee-list',
  templateUrl: './empolyee-list.component.html',
  styleUrls: ['./empolyee-list.component.scss'],
})
export class EmpolyeeListComponent implements OnInit {
  pageSize: number = 2;
  pageNumber: number = 1;
  employeeList!: Employee[];
  displayedColumns = [
    'employeeId',
    'employeeName',
    'designation',
    'phoneNumber',
    'gender',
    'salary',
    'skills',
  ];

  constructor(private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe((data) => {
      console.log(data);
      this.employeeList = data;
    });
  }

  ngOnInit(): void {
    this.employeeService.getAllValues().subscribe((data) => {
      this.employeeList = data;
    });
  }

  getTheResults = (searchTerm: string) => {
    this.employeeService.getTheSearch(searchTerm).subscribe((data) => {
      this.employeeList = data;
    });
  };
}
function ViewChild(MatPaginator: any) {
  throw new Error('Function not implemented.');
}

function MatPaginator(MatPaginator: any) {
  throw new Error('Function not implemented.');
}
