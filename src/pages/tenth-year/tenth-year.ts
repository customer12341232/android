import { HighschoolSubjectsFirstYearSecondSemesterPage } from './../highschool-subjects-first-year-second-semester/highschool-subjects-first-year-second-semester';
import { HighschoolSubjectsThirdYearPage } from './../highschool-subjects-third-year/highschool-subjects-third-year';
import { HighschoolSubjectsSecondYearPage } from './../highschool-subjects-second-year/highschool-subjects-second-year';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { HighschoolSubjectsFirstYearPage } from '../highschool-subjects-first-year/highschool-subjects-first-year';

/**
 * Generated class for the FifthYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fifth-year',
  templateUrl: 'tenth-year.html',
})
export class TenthYearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }
  GoToFirst()  {
 this.navCtrl.push(HighschoolSubjectsFirstYearPage);
  }
  GoToSecond()  {
    this.navCtrl.push(HighschoolSubjectsFirstYearSecondSemesterPage);
  }
  
}
