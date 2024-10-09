import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List_serieComponent } from './list_serie/list_serie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [List_serieComponent],
  declarations: [List_serieComponent]
})
export class SerieModule { }
