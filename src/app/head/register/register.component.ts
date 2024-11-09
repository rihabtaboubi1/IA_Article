import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; // Import HttpClient
import { Observable } from 'rxjs'; // Import Observable if you want to use it
import { FooterComponent } from '../../home/footer/footer.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, FooterComponent],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  dateOfBirth: string = '';
  gender: string = '';
  country: string = '';
  region: string = '';
  education: string = '';
  phoneNumber: string = '';
  email: string = '';

  constructor(private http: HttpClient) {} // Inject HttpClient

  onRegister() {
    const registrationDetails = {
      username: this.username,
      password: this.password,
      dateOfBirth: this.dateOfBirth,
      gender: this.gender,
      country: this.country,
      region: this.region,
      education: this.education,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
  
    this.http.post('http://localhost:8080/api/registers', registrationDetails)
      .subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          // Handle successful registration (e.g., redirect, show a message, etc.)
          alert('Registration succeeded!');
        },
        error: (error) => {
          console.error('Registration failed:', error);
          // Handle error (e.g., show an error message)
          alert('Registration failed. Please check the console for more details.');
        }
      });
  }
  
  
}
