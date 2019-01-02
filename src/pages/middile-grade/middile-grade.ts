import { NinethYearPage } from './../ninth-year/ninth-year';
import { EighthYearPage } from './../eighth-year/eighth-year';
import { SeventhYearPage } from './../seventh-year/seventh-year';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MiddileGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-middile-grade',
  templateUrl: 'middile-grade.html',
})
export class MiddileGradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToFirst()  {
    this.navCtrl.push(SeventhYearPage);
  }
  GoToSecond()  {
    this.navCtrl.push(EighthYearPage);
  }
  GoToThird()  {
    this.navCtrl.push(NinethYearPage);
  }

}
