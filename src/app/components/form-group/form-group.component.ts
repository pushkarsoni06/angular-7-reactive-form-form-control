import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  contactForm: FormGroup;

  constructor() { }

  ngOnInit() {
   this.contactForm = new FormGroup({
     firstName : new FormControl('',[Validators.required]),
     lastName : new FormControl(''),
     email : new FormControl('',[Validators.required, Validators.email]),
   });

   this.contactForm.valueChanges.subscribe(datat => {
     ///console.log(datat);
   });

   this.contactForm.get('firstName').valueChanges.subscribe(datat => {
     console.log("First Name");
    console.log(datat);
  });

  this.contactForm.get('lastName').valueChanges.subscribe(datat => {
    console.log("Last Name");
    console.log(datat);
  });

  this.contactForm.get('email').valueChanges.subscribe(datat => {
    //console.log("email"+ this.contactForm.get('email').valid);
    console.log(this.contactForm.valid);
  console.log(datat);
  });
  }

 

}
