import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})

export class ReactiveFormComponent {
   isSubmitted= false;
  // myForm = new FormGroup({
  //   fname: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(3),
  //   ]),
  //   email: new FormControl('', [Validators.email, Validators.required]),
  // });
 
  myForm: FormGroup
  
  constructor(private fb:FormBuilder, private authService: AuthService,private router:Router){
this.myForm = this.fb.group({
  fname: ['', [Validators.required,Validators.minLength(3)]],
  email:['', [Validators.email,Validators.required]],
  mobileno: ['', [Validators.pattern('[0-9]{10}')]]
})
  }

  OnSubmit() {
    if (this.myForm.valid) {
      this.authService.isLoggedIn();
      console.log(this.myForm.value, 'value of reactive form ');
      this.isSubmitted = true;
    } else {
      console.log(this.myForm, 'error from forms ');
    }
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }
  
}
