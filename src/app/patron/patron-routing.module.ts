import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatronComponent } from './add-patron/add-patron.component';
import { ListPatronComponent } from './list-patron/list-patron.component';
import { EditPatronComponent } from './edit-patron/edit-patron.component';

const routes: Routes = [
  {
    path:'add',
    component: AddPatronComponent
  },
  {
    path:'list',
    component: ListPatronComponent
  },
  { path:'update/:id', 
    component: EditPatronComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatronRoutingModule { }
