import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './component/users/users.component';
import { TicketsComponent } from './component/tickets/tickets.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { ReportsComponent } from './component/reports/reports.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TicketsComponent,
    NavigationComponent,
    ProjectsComponent,
    ReportsComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
