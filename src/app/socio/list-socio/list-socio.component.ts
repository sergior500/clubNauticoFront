import { Component } from '@angular/core';
import { Socio } from '../interfaces/socio.interface';
import { SocioServiceService } from '../services/socio-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-socio',
  templateUrl: './list-socio.component.html',
  styleUrls: ['./list-socio.component.css']
})
export class ListSocioComponent {

  sociosList:Socio[] = [];

  constructor(private socios:SocioServiceService){

  }

  ngOnInit():void {
    this.getSocios();
  }

  getSocios(){
    this.socios.socioList()
      .subscribe({
        next:(resp) => {
          this.sociosList = resp;
          console.log(this.sociosList);
        }
      })
  }

  deleteSocio(id:number){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.socios.deleteSocio(id)
          .subscribe({
            next:(res) => {
            }
          })
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'El patron ha sido eliminado correctamente!',
            'success'
          ).then(() => {
            this.getSocios();
          })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your file is safe :)',
          'error'
        )
      }
    })
  }
}
