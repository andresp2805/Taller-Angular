import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-list_serie',
  templateUrl: './list_serie.component.html',
  styleUrls: ['./list_serie.component.css']
})
export class List_serieComponent implements OnInit {

  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }
  getSeries(): void{
    this.serieService.getSeries().subscribe((series) => {
      this.series = series});
  }
  getPromedio(series: Serie[]): number {
    let promedio = 0;
    for (let serie of series) {
      promedio += serie.seasons;
    }
    return promedio / series.length;
  }
  
  ngOnInit() {
    this.getSeries();
    this.getPromedio(this.series);
  }

}
