import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the HighschoolSubjectsThirdYearPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-highschool-subjects-third-year',
  templateUrl: 'highschool-subjects-third-year.html',
})
export class HighschoolSubjectsThirdYearPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alerCtrl: AlertController) {
  }

  
  goTo(pageIndex: number) {
    let confirm = this.alerCtrl.create({
     title: 'تنبيه تنزيل مقاطع الفيديو!',
     message: 'سوف يتم التأكد من مقاطع الفيديو وتحميل ماينقص منها مما قد يستهلك حجم بيانات مرتفع هل انت موافق؟',
     buttons: [
       {
         text: 'لا,غير موافق',
         handler: () => {
           console.log('Disagree clicked');
         }
       },
       {
         text: 'موافق',
         handler: () => {
           console.log('Agree clicked');
           this.navCtrl.push('GradePage', { 'grade': pageIndex });
         }
       }
     ]
   });
   confirm.present()
}

}
