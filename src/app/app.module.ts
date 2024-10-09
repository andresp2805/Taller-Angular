import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SerieListComponent } from './series/serie-list/serie-list.component';  // Importa el componente SerieList
import { SerieService } from './series/serie.service';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,  
  ],
  imports: [
    BrowserModule
  ],
  providers: [SerieService],
  bootstrap: [AppComponent]
})
export class AppModule { }


