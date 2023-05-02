import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBarcosComponent } from './add-barcos/add-barcos.component';
import { ListBarcosComponent } from './list-barcos/list-barcos.component';
import { EditBarcoComponent } from './edit-barco/edit-barco.component';

const routes: Routes = [
  {
    path:'add',
    component: AddBarcosComponent
  },
  {
    path:'list',
    component: ListBarcosComponent
  },
  {
    path:'update/:id',
    component: EditBarcoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BarcoRoutingModule { }
