import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { RolePipe } from './role.pipe';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RolePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
