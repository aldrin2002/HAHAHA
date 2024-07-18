import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from '@angular/router';
import { DialogComponent } from "./shared/components/dialog/dialog.component";
import { GeneralService } from './share/services/general.service';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, LoginComponent, DialogComponent,CommonModule,NgIf,SignupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(public generalService: GeneralService){}
  }

