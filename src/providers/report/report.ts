import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ReportProvider {

  baseUrl = "http://localhost:8888/reserve-room/src/public/index.php";

  constructor(public http: HttpClient) {
    console.log('Hello ReportProvider Provider');
  }

  getReport() {
    return this.http.get(this.baseUrl + '/report/month');
  }

}
