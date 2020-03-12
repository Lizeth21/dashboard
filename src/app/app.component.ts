import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  url = '';
  column: string[] = new Array();
  row: string[]  = new Array();

  constructor(private http: HttpClient) { }

  consult() {
    if (this.url === '') {
      alert('Por favor digite la  url para poder consultar');
      return;
    }
    this.http.get(this.url).subscribe(result => {
      const dta = result;
      this.getColumn(dta[0]);
      this.getRow(dta);
    }, error => {
      alert('Se presentaron problemas tecnicos ' + JSON.stringify(error));
    });
  }

  private getColumn(dta: any[]) {
    this.column = new Array();
    this.column = Object.keys(dta);
  }

  private getRow(dta: any) {
    this.row = new Array();
    for (let i = 0; i < dta.length; i++) {
      const item = dta[i];
      const it: any[] = Object.values(item);
      for (let j = 0; j < it.length; j++) {
        this.row.push(it[j]);
      }
    }
  }

  onKey(value: string) {
    this.url = '';
    this.url += value;
  }
}
