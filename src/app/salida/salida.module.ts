import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSalidasComponent } from './list-salidas/list-salidas.component';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';
import { SalidasRoutingModule } from './salida-routing.module';
import { AddSalidaComponent } from './add-salida/add-salida.component';



@NgModule({
  declarations: [
    ListSalidasComponent,
    AddSalidaComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ReactiveFormsModule,
    SalidasRoutingModule
  ]
})
export class SalidaModule { }
