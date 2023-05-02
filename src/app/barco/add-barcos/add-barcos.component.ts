import { Component } from '@angular/core';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';
import { BarcoService } from '../services/barco.service';
import { PatronServiceService } from 'src/app/patron/services/patron-service.service';
import { Router } from '@angular/router';
import { Patron } from 'src/app/patron/interfaces/patron.interface';
import Swal from 'sweetalert2';
import { SocioServiceService } from 'src/app/socio/services/socio-service.service';
import { Socio } from 'src/app/socio/interfaces/socio.interface';

@Component({
  selector: 'app-add-barcos',
  templateUrl: './add-barcos.component.html',
  styleUrls: ['./add-barcos.component.css']
})
export class AddBarcosComponent {

  socios :Socio[] = [];

  constructor(private fb: FormBuilder,private service: BarcoService, private socio: SocioServiceService, private route : Router) { }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    cuota:['',[Validators.required,Validators.min(1)]],
    numAmarre:['',[Validators.required,Validators.min(1)]],
    idSocio:['',[Validators.required]]
  },)

  ngOnInit(): void {
    this.getSocios();
  }

  getSocios() {
    this.socio.socioList()
                .subscribe({
                  next: (resp) =>{
                    this.socios = resp;
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

    this.service.createBarco(this.myForm.value)
    .subscribe({
      next:(res)=>{
        this.route.navigate(["/barcos/list"]);
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
