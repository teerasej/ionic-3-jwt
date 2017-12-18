import { ReportProvider } from './../../providers/report/report';
import { Storage } from '@ionic/storage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public reportProvider: ReportProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReportPage');
    this.storage.get('token').then(
      val => {
        console.log(val);

        this.reportProvider.getReport(val)
          .subscribe(
          (data) => {
            console.log(data);
          },
          (error) => { alert(error.message) }
          )
      }
    )
  }

}
