import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  baseUrl = "http://localhost:8888/reserve-room/src/public/index.php";


  constructor(public http: HttpClient, public storage:Storage) {
    console.log('Hello UserProvider Provider');
  }

  signIn(username, password){

    let json = {
      "username": username,
      "password": password
    }

    return this.http.post(this.baseUrl + "/signin", json);
  }

  
}
