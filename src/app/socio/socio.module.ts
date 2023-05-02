import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSocioComponent } from './list-socio/list-socio.component';
import { AddSocioComponent } from './add-socio/add-socio.component';
import { EditSocioComponent } from './edit-socio/edit-socio.component';
import { SocioRoutingModule } from './socio-routing.module';
import { TableModule } from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListSocioComponent,
    AddSocioComponent,
    EditSocioComponent
  ],
  imports: [
    CommonModule,
    SocioRoutingModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class SocioModule { }
