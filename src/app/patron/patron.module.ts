import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { EditPatronComponent } from './edit-patron/edit-patron.component';
import { ListPatronComponent } from './list-patron/list-patron.component';
import { PatronRoutingModule } from './patron-routing.module';
import { TableModule } from 'primeng/table';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddPatronComponent,
    EditPatronComponent,
    ListPatronComponent
  ],
  imports: [
    CommonModule,
    PatronRoutingModule,
    TableModule,
    ReactiveFormsModule
  ]
})
export class PatronModule { }
