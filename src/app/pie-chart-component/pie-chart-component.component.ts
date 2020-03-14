import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pie-chart-component',
  templateUrl: './pie-chart-component.component.html',
  styleUrls: ['./pie-chart-component.component.css']
})
export class PieChartComponentComponent {

  // Pie
  @Input() pieChartLabels: string[];
  @Input() pieChartData: number[] = [40, 20, 20 , 10, 10];
  public pieChartType = 'pie';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
