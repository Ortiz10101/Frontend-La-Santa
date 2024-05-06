import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup
  constructor(private fb: FormBuilder){ }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control("email", [Validators.required, Validators.email]),
      password: this.fb.control("password", [Validators.required, Validators.minLength(4),
        Validators.maxLength(20) 
      ])
    })
    
  }

}
