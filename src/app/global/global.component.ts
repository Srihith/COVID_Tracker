import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ChartsModule } from 'ng2-charts';

@Component({
  selector: 'app-global',
  templateUrl: './global.component.html',
  styleUrls: ['./global.component.css']
})
export class GlobalComponent implements OnInit {
  covidData;

  constructor(private http: HttpClient) { }

  public barChartOptions = {
    scaleShowVerticalLines: true,
    responsive: true
  };

  public barChartLabels = [];
  deaths=[];
  hospitalized=[];
  onVentilatorCurrently=[];
  recovered=[];
  public barChartType = 'line';
  public barChartLegend = true;
  public barChartData = [
    {data: this.deaths, label: 'Total Deaths'},
  ];

  public barChartDataa = [
    {data: this.hospitalized, label: 'Currently Hospitalized'},
  ];

  public barChartDataaa = [
    {data: this.onVentilatorCurrently, label: 'Currently On Ventilator'},
  ];

  public barChartDataaaa = [
    {data: this.recovered, label: 'Total Recovered'},
  ];
  public barChartColors = [
    { 
      backgroundColor: '#3f51b5',
      borderColor: 'black',
      pointBackgroundColor: 'rgba(00,00,00,1)',
      pointBorderColor: '#000',
      pointHoverBackgroundColor: '#000',
      pointHoverBorderColor: 'rgba(00,00,00,1)'
    }
  ];



  ngOnInit(): void {
    this.http.get<covidAPIData>('https://api.covidtracking.com/v1/us/daily.json').subscribe(data => {
        this.covidData = data;
        for(let i=7;i>=0;i--){
          var fullDate = this.covidData[i].date;
          var year = String(fullDate).substring(0,4);
          var month = String(fullDate).substring(4,6);
          var day = String(fullDate).substring(6,8);
          var currDate = month + "-" + day + "-" + year;
          this.barChartLabels.push(currDate);
          this.deaths.push(this.covidData[i].death);
          this.hospitalized.push(this.covidData[i].hospitalizedCurrently);
          this.onVentilatorCurrently.push(this.covidData[i].onVentilatorCurrently);
          this.recovered.push(this.covidData[i].recovered);
        }
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
