import { TwelveYearPage } from './../twelvth-year/twelvth-year';
import { ElevenYearPage } from './../eleventh-year/eleventh-year';
import { TenthYearPage } from './../tenth-year/tenth-year';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HighschoolGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-highschool-grade',
  templateUrl: 'highschool-grade.html',
})
export class HighschoolGradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  GoToFirst()  {
    this.navCtrl.push(TenthYearPage);
  }
  GoToSecond()  {
    this.navCtrl.push(ElevenYearPage);
  }
  GoToThird()  {
    this.navCtrl.push(TwelveYearPage);
  }

}
