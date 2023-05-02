import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { SocioServiceService } from '../services/socio-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-socio',
  templateUrl: './add-socio.component.html',
  styleUrls: ['./add-socio.component.css']
})
export class AddSocioComponent {

  constructor(private fb: FormBuilder, private socio: SocioServiceService , private route : Router) { }

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

    this.socio.createSocio(this.myForm.value)
    .subscribe({
      next:(res)=>{
        this.route.navigate(["/socios/list"]);
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
