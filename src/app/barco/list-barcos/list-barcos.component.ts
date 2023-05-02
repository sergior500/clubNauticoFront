import { Component } from '@angular/core';
import { BarcoService } from '../services/barco.service';
import { Barco } from '../interfaces/barco.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-barcos',
  templateUrl: './list-barcos.component.html',
  styleUrls: ['./list-barcos.component.css']
})
export class ListBarcosComponent {
 
  barcosList:Barco[] = [];

  constructor(private barcos:BarcoService){

  }

  ngOnInit():void {
    this.getBarcos();
  }

  getBarcos(){
    this.barcos.barcoList()
      .subscribe({
        next:(resp) => {
          this.barcosList = resp;
        }
      })
  }
  deleteBarco(id:number){
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
        this.barcos.deleteBarco(id)
          .subscribe({
            next:(res) => {
            }
          })
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'El barco ha sido eliminado correctamente!',
            'success'
          ).then(() => {
            this.getBarcos();
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
