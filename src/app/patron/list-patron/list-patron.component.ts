import { Component } from '@angular/core';
import { Patron } from '../interfaces/patron.interface';
import { PatronServiceService } from '../services/patron-service.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-patron',
  templateUrl: './list-patron.component.html',
  styleUrls: ['./list-patron.component.css']
})
export class ListPatronComponent {
  patronList:Patron[] = [];

  constructor(private patrones:PatronServiceService){

  }

  ngOnInit():void {
    this.getPatrones();
  }

  getPatrones(){
    this.patrones.patronList()
                .subscribe(patrones => {
                    this.patronList = patrones;
                    console.log(patrones);
                  });
        
      
  }
  deletePatron(id:number){
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
        this.patrones.deletePatron(id)
          .subscribe({
            next:(res) => {
            }
          })
          swalWithBootstrapButtons.fire(
            'Deleted!',
            'El patron ha sido eliminado correctamente!',
            'success'
          ).then(() => {
            this.getPatrones();
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
