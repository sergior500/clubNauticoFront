import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import Swal from 'sweetalert2';
import { SocioServiceService } from '../services/socio-service.service';

@Component({
  selector: 'app-edit-socio',
  templateUrl: './edit-socio.component.html',
  styleUrls: ['./edit-socio.component.css']
})
export class EditSocioComponent {

  constructor(private fb: FormBuilder, private socio: SocioServiceService, private route : Router, private router: ActivatedRoute) { }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    apellido:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]]
  },)

  id!:number;

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.socio.getSocio(this.id)
      .subscribe({
        next: (res) => {
          this.myForm.setValue({
                nombre : res.nombre,
                apellido : res.apellido
          })
          
        }
      })
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

    this.socio.updateSocio(this.id,this.myForm.value)
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
