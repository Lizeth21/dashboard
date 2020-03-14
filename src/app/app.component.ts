import {Component, ElementRef, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  @ViewChild('url') url: ElementRef;
  column: string[] = new Array();
  row: any[]  = new Array();
  statistics: number[]  = new Array();

  VISIBLE_PIE = false;
  VISIBLE_TABLE = false;

  constructor(private http: HttpClient) { }

  consult() {
    if (this.url.nativeElement.value === '') {
      alert('Por favor digite la  url para poder consultar');
      return;
    }
    this.http.get(this.url.nativeElement.value ).subscribe(result => {
      const dta = result;
      this.getColumn(dta[0]);
      this.getRow(JSON.parse(JSON.stringify(result)));
    }, error => {
      alert('Se presentaron problemas tecnicos ' + JSON.stringify(error));
    });
  }

  private getColumn(dta: any[]) {
    this.column = new Array();
    const it = Object.keys(dta);
    if (it.length >= 0) {
      this.column.push(it[0]);
    }
    if (it.length >= 2) {
      this.column.push(it[1]);
    }

    if (it.length >= 3) {
      this.column.push(it[2]);
    }
  }

  private getRow(dta: any[]) {
    this.row = new Array();
    for (const it of dta){
      let countItem = 0;
      const arrow = new Array();
      // tslint:disable-next-line:forin
      for (const temp in it) {
        if (countItem < 2) {
          arrow.push(it[temp]);
        }
        countItem = countItem + 1;
      }
      this.row.push(arrow);
    }
  }

  showTable() {
    this.consult();
    if (this.column.length >= 1) {
      this.VISIBLE_PIE = false;
      this.VISIBLE_TABLE = true;
    }
  }

  showPieChart() {
    this.consult();
    if (this.column.length >= 1) {
      this.getStatistics();
      console.log(JSON.stringify(this.statistics));
      this.VISIBLE_PIE = true;
      this.VISIBLE_TABLE = false;
    }
  }

  getStatistics() {
     this.statistics = new Array();
     let maximum = 100 / this.column.length;
    for (let i = 0; i < this.column.length; i++) {
      const item = Math.random() * (maximum - 0) + 0;
      maximum = maximum + maximum;
      this.statistics.push(item);
    }
  }
}
