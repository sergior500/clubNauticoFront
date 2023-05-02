import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListSalidasComponent } from './salida/list-salidas/list-salidas.component';

const routes: Routes = [
  {
    path:'barcos',
    loadChildren: () => import('./barco/barco.module').then(m => m.BarcoModule)
  },
  {
    path:'socios',
    loadChildren: () => import('./socio/socio.module').then(m => m.SocioModule)
  },
  {
    path:'patrones',
    loadChildren: () => import('./patron/patron.module').then(m => m.PatronModule)
  },
  {
    path:'salidas',
    loadChildren: () => import('./salida/salida.module').then(m => m.SalidaModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
