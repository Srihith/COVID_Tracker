import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  covidData;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<covidAPIData>('https://api.covidtracking.com/v1/us/daily.json').subscribe(data => {
        this.covidData = data;
        //console.log(data.states);
    });
  }
}

interface covidAPIData{
  date: string;
  states: number;
  positive: number;
  negative: number;
  pending: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
  inIcuCurrently: number;
  inIcuCumulative: number;
  onVentilatorCurrently: number;
  onVentilatorCumulative: number;
  recovered: number;
  dateChecked: Date;
  death: number;
  hospitalized: number;
  totalTestResults: number;
  lastModified: Date;
  total: number;
  posNeg: number;
  deathIncrease: number;
  hospitalizedIncrease: number;
  negativeIncrease: number;
  positiveIncrease: number;
  totalTestResultsIncrease: number;
  hash: string;
}
