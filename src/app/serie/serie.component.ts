import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit 
{
  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];
  promedioTemporadas: number = 0;
  getSeries() {
    this.serieService.getSeries().subscribe(seriess => {
      this.series = seriess;
      this.series.forEach(serie=> {
        this.promedioTemporadas+=serie.seasons;
      })
      this.promedioTemporadas/=this.series.length;
    })
  }

  ngOnInit() {
    this.getSeries();
  }

}
