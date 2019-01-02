import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { FirstYearPage } from '../first-year/first-year';
import { SecondYearPage } from '../second-year/second-year';
import { ThirdYearPage } from '../third-year/third-year';
import { FourthYearPage } from '../fourth-year/fourth-year';
import { FifthYearPage } from '../fifth-year/fifth-year';
import { SixthYearPage } from '../sixth-year/sixth-year';


/**
 * Generated class for the FirstlyGradePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstly-grade',
  templateUrl: 'firstly-grade.html',
})
export class FirstlyGradePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

 
  GoToFirst()  {
    this.navCtrl.push(FirstYearPage);
  }
  GoToSecond()  {
    this.navCtrl.push(SecondYearPage);
  }
  GoToThird()  {
    this.navCtrl.push(ThirdYearPage);
  }
  GoToFourth()  {
    this.navCtrl.push(FourthYearPage);
  }
  GoToFifth()  {
    this.navCtrl.push(FifthYearPage);
  }
  GoToSixth()  {
    this.navCtrl.push(SixthYearPage);
  }


}
