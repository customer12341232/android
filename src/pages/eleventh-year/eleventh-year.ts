import { HighschoolSubjectsFirstYearSecondSemesterPage } from './../highschool-subjects-first-year-second-semester/highschool-subjects-first-year-second-semester';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController } from 'ionic-angular';
import { HighschoolSubjectsFirstYearPage } from '../highschool-subjects-first-year/highschool-subjects-first-year';
import { HighschoolSubjectsSecondYearPage } from '../highschool-subjects-second-year/highschool-subjects-second-year';
import { HighschoolSubjectsSecondYearSecondSemesterPage } from '../highschool-subjects-second-year-second-semester/highschool-subjects-second-year-second-semester';

/**
 * Generated class for the FirstYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first-year',
  templateUrl: 'eleventh-year.html',
})
export class ElevenYearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,public alerCtrl: AlertController) {
  }

  GoToFirst()  {
    this.navCtrl.push(HighschoolSubjectsSecondYearPage);
     }
     GoToSecond()  {
       this.navCtrl.push(HighschoolSubjectsSecondYearSecondSemesterPage);
     }
     



}
