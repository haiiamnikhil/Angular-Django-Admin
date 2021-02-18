import { ComposeComponent } from './email/compose/compose.component';
import { EmailComponent } from './email/email.component';
import { ListusersComponent } from './user/listusers/listusers.component';
import { RegisterComponent } from './user/register/register.component';
import { AppComponent } from './app.component';
import { ProfileComponent } from './user/profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './user/login/login.component';
import { ReadComponent } from './email/read/read.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'email',
    component:EmailComponent
  },
  {
    path:'email/readmail',
    component: ReadComponent
  },
  {
    path:'email/compose',
    component: ComposeComponent
  },
  {
    path: 'user/profile',
    component: ProfileComponent
  },
  {
    path: 'user/listusers',
    component: ListusersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
