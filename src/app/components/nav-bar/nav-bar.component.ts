import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { AuthService } from 'src/app/services/auth.service';
import { Employee } from 'src/app/models/employee';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  firstName: string | undefined;
  isLoggedIn: boolean = true;
  loggedIn: boolean = false;
  userProfile: KeycloakProfile = {};
  employeeList: Employee[] = [];
  constructor(
    private auth: AuthService,
    private _employeeService: EmployeeService,
    private dialog: MatDialog
  ) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.auth.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.auth.loadUserProfile();
      this.firstName = this.userProfile.username;
    } else {
      this.auth.logout();
    }
  }
  logout() {
    this.auth.logout();
  }
  search(value: string) {
    this._employeeService.getTheSearch(value).subscribe((data) => {
      this.employeeList = data;
      this._employeeService.setEmployees(data);
    });
  }

  openModal = () => {
    const dialogRef = this.dialog.open(CreateEmployeeComponent, {
      width: '600px',
      height: '660px',
    });
  };


  emptySearch(val: string) {
    if (val === '') {
      this._employeeService.getAllValues().subscribe((data) => {
        console.log(data);
        // this.employeeList = data;
        this._employeeService.setEmployees(data);
      });
    }
  }
}
