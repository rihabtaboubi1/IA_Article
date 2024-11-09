import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Import FormsModule
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-signin',
  standalone: true,  // Declare as standalone
  imports: [FormsModule, FooterComponent],  // Import FormsModule to use ngModel
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SignInComponent {
  // Define the properties used with ngModel
  username: string = '';  
  password: string = '';

  constructor() {}

  onSignIn() {
    // Handle sign-in logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
  }
}
