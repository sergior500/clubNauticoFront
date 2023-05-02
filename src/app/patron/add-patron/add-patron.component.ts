import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PatronServiceService } from '../services/patron-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-patron',
  templateUrl: './add-patron.component.html',
  styleUrls: ['./add-patron.component.css']
})
export class AddPatronComponent {
  constructor(private fb: FormBuilder, private patron: PatronServiceService , private route : Router) { }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    apellido:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]]
  },)

  ngOnInit(): void {
    
  }


  
  notValidField(field:string){
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched;
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }

    this.patron.createPatron(this.myForm.value)
    .subscribe({
      next:(res)=>{
        this.route.navigate(["/patrones/list"]);
        Swal.fire(
          'Good job!',
          'You have created a new category!',
          'success'
        )
          
    },
      error:(err)=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!'
        })
      }})

    console.log(this.myForm.value)
    this.myForm.reset({})
  }
}
