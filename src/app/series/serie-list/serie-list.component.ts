import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../serie';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css']
})
export class SerieListComponent implements OnInit {
  series: Serie[] = [];  // Aquí ya puedes definir el array
  averageSeasons: number = 0;

  constructor(private serieService: SerieService) { }

  ngOnInit() {
    // Te suscribes al Observable para obtener los datos
    this.serieService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
      this.calculateAverageSeasons();
    });
  }

  calculateAverageSeasons() {
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }
}






