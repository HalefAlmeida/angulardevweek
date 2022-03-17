import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'ocorrencias',
    pathMatch: 'full',
  },
  {
    //Lazy loading para a rota Ocorrencias
    path: 'ocorrencias',
    loadChildren: () =>
      import('./ocorrencias/ocorrencias.module').then(
        (m) => m.OcorrenciasModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
