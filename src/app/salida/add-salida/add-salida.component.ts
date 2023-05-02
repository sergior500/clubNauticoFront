import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BarcoService } from 'src/app/barco/services/barco.service';
import { Patron } from 'src/app/patron/interfaces/patron.interface';
import { PatronServiceService } from 'src/app/patron/services/patron-service.service';
import { SalidaServiceService } from '../services/salida-service.service';
import { Barco } from 'src/app/barco/interfaces/barco.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-salida',
  templateUrl: './add-salida.component.html',
  styles: [
  ]
})
export class AddSalidaComponent {
  patrones :Patron[] = [];
  barcos :Barco[] = [];

  constructor(private fb: FormBuilder,private salida: SalidaServiceService,private barco: BarcoService, private patron: PatronServiceService, private route : Router) { }

  myForm: FormGroup = this.fb.group({
  
    idPatron:['',[Validators.required]],
    numMatricula:['',[Validators.required]]
  },)

  ngOnInit(): void {
    this.getPatrones();
    this.getBarcos();
  }

  getPatrones() {
    this.patron.patronList()
                .subscribe({
                  next: (resp) =>{
                    this.patrones = resp;
                  }
                })
  }
  getBarcos() {
    this.barco.barcoList()
                .subscribe({
                  next: (resp) =>{
                    this.barcos = resp;
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
    this.salida.createPatron(this.myForm.value)
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
