import { Component } from '@angular/core';
import { SalidaServiceService } from '../services/salida-service.service';
import { salidas } from '../interfaces/salidas.interface';


@Component({
  selector: 'app-list-salidas',
  templateUrl: './list-salidas.component.html',
  styleUrls: ['./list-salidas.component.css']
})
export class ListSalidasComponent {
  
  salidaList:salidas[] = [];

  constructor(private salida:SalidaServiceService){

  }

  ngOnInit():void {
    this.getSalidas();
  }

  getSalidas(){

    this.salida.salidaList()
                .subscribe(salidas => {
                    this.salidaList = salidas;
                  });

  }
}
