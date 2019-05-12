import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  minutes: number;
  seconds: number;
  counter: number;
  interval: any;
  authenticationForm: FormGroup;
  constructor(private router: Router,private formBuilder:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.startCountdown(120);
    this.authenticationForm = this.formBuilder.group({
      'password':['',Validators.compose([Validators.required])],
      'otp':['',Validators.compose([Validators.required])]
    })
  }
  ngOnDestroy(): void {
    clearInterval(this.interval);   
  }
   startCountdown(timeLeft: number): void {
    this.counter = 0;
    this.interval = setInterval(() => {
      console.log(this.counter);
      document.getElementById('timer').innerHTML = this.convertSeconds(timeLeft - this.counter);
      this.counter++;
      if (this.counter > timeLeft ) {
        clearInterval(this.interval);
      }
    }, 1000);
  }
    convertSeconds(timeLeft: number): string {
    this.minutes = Math.floor(timeLeft / 60);
    this.seconds = Math.floor(timeLeft % 60);
    return Number(this.minutes).toLocaleString('en-US', {minimumIntegerDigits: 2}) + ':' + Number(this.seconds).toLocaleString('en-US', {minimumIntegerDigits: 2});
   }
   onSubmit() {
   this.router.navigateByUrl('admin/dashboard');
   }
   onForgotPassword() {
    this.router.navigateByUrl('forgotpassword');
    }
}
