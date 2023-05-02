import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalidasComponent } from './list-salidas/list-salidas.component';
import { AddSalidaComponent } from './add-salida/add-salida.component';


const routes: Routes = [
  {
    path:'add',
    component: AddSalidaComponent
  },
  {
    path:'list',
    component: ListSalidasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalidasRoutingModule { }
