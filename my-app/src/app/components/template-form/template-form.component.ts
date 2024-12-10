import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  standalone: false,

  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  formdata = {
    //variable
    fname:'',
    email: '',
    password: '',
    invalid: '',
  };
  isSubmitted = false;
  onSubmit() {
    console.log('form submited');
    console.log('email:- ', this.formdata.email);
    this.isSubmitted = true;
    setTimeout(() => {
      this.isSubmitted = false;
    }, 2000);
  }
}
