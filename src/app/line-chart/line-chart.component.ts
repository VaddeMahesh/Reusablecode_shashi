import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ChartData, ChartDataset } from 'chart.js';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {


  constructor( public dialogRef: MatDialogRef<LineChartComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }


  // Assuming you have a function to retrieve dynamic data
   getDynamicData() {
    // Replace this with your actual logic to fetch data dynamically
    return [20,50,30,80,40,];
  }
  getDynamic() {
    // Replace this with your actual logic to fetch data dynamically
    return [80,50,60,80,40,];
  }

  // Get the dynamic data for both lines
 dynamicDataLine1 = this.getDynamicData();
 dynamicDataLine2 = this.getDynamic(); // Assuming you have another set of data

  // Your chart datasets
 datasetLine1: ChartDataset<"line", (number | null)[]> = {
    data: this.dynamicDataLine1,
    label: 'Line 1', // Change label to something meaningful
    borderColor: 'blue',
    fill: false, // No fill for line chart
  };

   datasetLine2: ChartDataset<"line", (number | null)[]> = {
    data: this.dynamicDataLine2,
    label: 'Line 2', // Change label to something meaningful
    borderColor: 'red', // Color for the second line
    fill: false, // No fill for line chart
  };

  // Your dynamic labels (assuming you have a way to fetch them)
 dynamicLabels = ['January', 'February', 'March', 'April', 'May','June','July'];

  // Your dynamic lineChartData object
  lineChartData: ChartData<any, ChartDataset<"line", (number | null)[]>[]> = {
    datasets: [this.datasetLine1, this.datasetLine2], // Include both datasets
    labels: this.dynamicLabels,
  };


  lineChartType = 'line';
  lineOptions = {
    responsive: true,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  };
  lineChartColors = [
    {
      borderColor: 'rgba(0, 123, 255, 0.8)',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
    },
    {
      borderColor: 'rgba(255, 99, 132, 0.8)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }
  ];
  lineChartPlugins = [];
}
