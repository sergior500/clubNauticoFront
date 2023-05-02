import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BarcoService } from '../services/barco.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SocioServiceService } from 'src/app/socio/services/socio-service.service';
import { Socio } from 'src/app/socio/interfaces/socio.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-barco',
  templateUrl: './edit-barco.component.html',
  styleUrls: ['./edit-barco.component.css']
})
export class EditBarcoComponent {

  constructor(private fb: FormBuilder,private service: BarcoService, private route: ActivatedRoute, private socio : SocioServiceService , private router: Router) { 

  }

  myForm: FormGroup = this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(12)]],
    cuota:['',[Validators.required,Validators.min(1)]],
    numAmarre:['',[Validators.required,Validators.min(1)]],
    idSocio:['',[Validators.required]]
  },)

  socios :Socio[] = [];

  id!:number;

  comparator :boolean = false;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if(this.id){
      this.comparator = true;
    }
    this.getSocios();

    this.service.getBarco(this.id)
      .subscribe({
        next: (res) => {
          this.myForm.setValue({
                nombre : res.nombre,
                cuota : res.cuota,
                numAmarre : res.numAmarre,
                idSocio : res.idSocio
          })
          
        }
      })
  }

  notValidField(field:string){
    return this.myForm.controls[field].errors &&
    this.myForm.controls[field].touched;
  }

  getSocios() {
    this.socio.socioList()
                .subscribe({
                  next: (resp) =>{
                    this.socios = resp;
                  }
                })
  }

  save(){
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }

    this.service.updateBarco(this.id,this.myForm.value)
    .subscribe({
      next:(res)=>{
        this.router.navigate(["/barcos/list"]);
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
