import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { HighschoolSubjectsThirdYearPage } from '../highschool-subjects-third-year/highschool-subjects-third-year';
import { HighschoolSubjectsThirdYearSecondSemesterPage } from '../highschool-subjects-third-year-second-semester/highschool-subjects-third-year-second-semester';

/**
 * Generated class for the SixthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sixth-year',
  templateUrl: 'twelvth-year.html',
})
export class TwelveYearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  GoToFirst()  {
    this.navCtrl.push(HighschoolSubjectsThirdYearPage);
     }
     GoToSecond()  {
       this.navCtrl.push(HighschoolSubjectsThirdYearSecondSemesterPage);
     }
     
}
