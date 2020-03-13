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
}
