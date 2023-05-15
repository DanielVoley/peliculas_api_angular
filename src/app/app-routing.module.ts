import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReseniasComponent } from './resenias/resenias.component';
import { ShowGeneroComponent } from './show-genero/show-genero.component';


const routes: Routes = [
  {path: 'apidata', component: HomeComponent },
  {path: 'show_genero/:paramName', component: ShowGeneroComponent },
  {path: 'show_resenia/:paramPelicula', component: ReseniasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
