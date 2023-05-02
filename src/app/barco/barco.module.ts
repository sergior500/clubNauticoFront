import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBarcosComponent } from './list-barcos/list-barcos.component';
import { AddBarcosComponent } from './add-barcos/add-barcos.component';
import { EditBarcoComponent } from './edit-barco/edit-barco.component';
import { BarcoRoutingModule } from './barco-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    ListBarcosComponent,
    AddBarcosComponent,
    EditBarcoComponent
  ],
  imports: [
    CommonModule,
    BarcoRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BarcoModule { }
