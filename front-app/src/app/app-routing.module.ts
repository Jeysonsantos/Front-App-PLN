import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoLinkComponent } from './novo-link/novo-link.component';
import { ResumoTextoComponent } from './resumo-texto/resumo-texto.component';

const routes: Routes = [
  {path:'resumo-texto/:id',component:ResumoTextoComponent},
  {path:'novo-link',component:NovoLinkComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ ResumoTextoComponent,]
