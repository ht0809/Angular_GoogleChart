import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-column-chart',
  templateUrl: './google-column-chart.component.html',
  styleUrls: ['./google-column-chart.component.css']
})
export class GoogleColumnChartComponent implements OnInit {

  constructor() { }

  title = 'Total Number of Questions Handled Per User';
  type = 'ColumnChart';
  data = [
    ["Week1", 20, 30, 20],
    ["Week2", 56, 40, 35],
    ["Week3", 28, 40, 23],
    ["Week4", 30, 23, 22]
  ];
  columnNames = ['Week', 'Steven', 'Frank', 'Paul'];  
  options = {};  
  width = 600;  
  height = 400;  
  

  ngOnInit(): void {
  }

}
