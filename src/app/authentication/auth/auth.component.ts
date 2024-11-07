import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss', // Don't change this line
})
export class AuthComponent {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  isLogin: boolean = true;  // Toggle between login and signup

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the login and signup forms
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Toggle between login and signup forms
  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  // Submit login form
  onLoginSubmit() {
    if (this.loginForm.valid) {
      // console.log('Login Data:', this.loginForm.value);
      localStorage.setItem('authToken', 'some-token'); // Simulate successful login
      this.router.navigate(['/home']);
    }
  }

  // Submit signup form
  onSignUpSubmit() {
    if (this.signUpForm.valid) {
      // console.log('Sign Up Data:', this.signUpForm.value);
      localStorage.setItem('authToken', 'some-token'); // Simulate successful login
      this.router.navigate(['/home']);
    }
  }
}
