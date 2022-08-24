import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EmpolyeeListComponent } from './components/empolyee-list/empolyee-list.component';
import { Role } from './models/role';

const routes: Routes = [
  {
    path: '',
    component: EmpolyeeListComponent,
    data: {
      roles: [Role.USER],
    },
    canActivate: [AuthGuard],
  },
  { path: 'home', component: EmpolyeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule {}
