import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReseniasComponent } from './resenias/resenias.component';
import { ShowGeneroComponent } from './show-genero/show-genero.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [
  {path: '', component: InicioComponent },
  {path: 'peliculas', component: HomeComponent },
  {path: 'show_genero/:paramName/:nameVariable', component: ShowGeneroComponent },
  {path: 'show_resenia/:paramPelicula', component: ReseniasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
