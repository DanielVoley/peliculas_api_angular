import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShowGeneroComponent } from './show-genero/show-genero.component';
import { ReseniasComponent } from './resenias/resenias.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShowGeneroComponent,
    ReseniasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
