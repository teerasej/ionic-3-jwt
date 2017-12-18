import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider, public storage: Storage) {

  }

  signIn(username, password) {
    this.userProvider.signIn(username, password)
      .subscribe(
      (data: any) => {
        console.log(data);
        this.storage.set('token', data.token);
        this.navCtrl.push('ReportPage');
      }
      , (error) => { alert(error.message) }
      )
  }

}
