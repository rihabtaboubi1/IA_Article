import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@Component({
  selector: 'app-head',
  standalone: true,
  imports: [SignInComponent, FormsModule, RouterModule, RegisterComponent],
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']  // corrected the 'styleUrls' typo
})
export class HeadComponent {
  constructor(private router: Router) {}

  navigateToHome() {
    this.router.navigate(['/']); // Navigate to the homepage
  }

  // Add this method to navigate to the sign-in page
  navigateToSignIn() {
    this.router.navigate(['/sign-in']);  // Make sure the route '/signin' exists in your routing configuration
  }
  navigateToRegister(){
    this.router.navigate(['/register']);
  }
}
