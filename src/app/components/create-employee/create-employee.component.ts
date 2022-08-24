import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss'],
})
export class CreateEmployeeComponent implements OnInit {
  skills1: any;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit(): void {
    this._employeeService.getAllSkills().subscribe((data) => {
      this.skills1 = data;
    });
  }
  createEmployee = new FormGroup({
    employeeName: new FormControl(''),
    designation: new FormControl(''),
    phoneNumber: new FormControl(''),
    gender: new FormControl(''),
    salary: new FormControl(''),

    skills: new FormControl(''),
  });

  onSubmit(event: any) {
    console.log(this.createEmployee.value);

    this._employeeService.addEmployee(this.createEmployee.value);
  }

  // onSubmit() {
  //   console.log(this.requestData.value);
  //   this._requestService
  //     .createRequest(this.requestData.value)
  //     .subscribe((dataaa) => {
  //       this.dialogRef.close();
  //       this._requestService.filter('Register Click');
  //     });
  // }
}
