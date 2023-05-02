import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSocioComponent } from './add-socio/add-socio.component';
import { ListSocioComponent } from './list-socio/list-socio.component';
import { EditSocioComponent } from './edit-socio/edit-socio.component';


const routes: Routes = [
  {
    path:'add',
    component: AddSocioComponent
  },
  {
    path:'list',
    component: ListSocioComponent
  },
  { path: 'update/:id', 
    component: EditSocioComponent}	
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocioRoutingModule { }
