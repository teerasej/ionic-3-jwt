import { ReportProvider } from './../../providers/report/report';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'chart.js';
/**
 * Generated class for the ReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-report',
  templateUrl: 'report.html',
})
export class ReportPage {

  lineChartData = [];
  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October','November','December'];
  lineChartLegends = false;
  lineChartOptions = {
    responsive: true
  };
  lineChartType = 'line';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public reportProvider: ReportProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    this.storage.get('token').then(
      val => {
        console.log(val);

        this.reportProvider.getReport(val)
          .subscribe(
          (data:any) => {
            console.log(data);

            let valueArray = [];

            data.forEach(month => {
              valueArray.push(month.value);
            });

            this.lineChartData = [{

              data: valueArray
            }];
          },
          (error) => { alert(error.message) }
          )
      }
    )
  }

}
