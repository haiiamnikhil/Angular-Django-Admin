import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListusersComponent } from './user/listusers/listusers.component';
import { ForgotpasswordComponent } from './user/forgotpassword/forgotpassword.component';
import { ApiService } from './service/apiservice.service';
import { FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { ComposeComponent } from './email/compose/compose.component';
import { ReadComponent } from './email/read/read.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnalysisComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent,
    ListusersComponent,
    ForgotpasswordComponent,
    EmailComponent,
    InboxComponent,
    ComposeComponent,
    ReadComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
