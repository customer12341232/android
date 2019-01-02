import { HighschoolGradePage } from './../highschool-grade/highschool-grade';
import { MiddileGradePage } from './../middile-grade/middile-grade';
import { FirstlyGradePage } from './../firstly-grade/firstly-grade';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';



import { FirstYearPage } from '../first-year/first-year';
import { SecondYearPage } from '../second-year/second-year';
import { ThirdYearPage } from '../third-year/third-year';
import { FourthYearPage } from '../fourth-year/fourth-year';
import { FifthYearPage } from '../fifth-year/fifth-year';
import { SixthYearPage } from '../sixth-year/sixth-year';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController ,
              public alertCtrl: AlertController) {  }
  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'عن التطبيق',
      subTitle: "تنفيذ:<br> الأستاذ أحمد موسى الفيفي<br> الأستاذ عبدالله علي الفيفي<br>فريق العمل:<br>الأستاذ حسين شريف الفيفي<br>الأستاذ سلطان موسى الفيفي<br> تطوير:<br>زياد محمد العتيبي<br>ziyad.alotaibe@gmail.com <br>  عثمان أيمن  <br>othman.ayman47@gmail.com <br>  تصميم: <br>رشا غيلان <br> R-sh2009@hotmail.com ",
      buttons: ['حسناً']
    });
    alert.present();
  }
  slides = [
    {
      title: "مرحبا بك في تطبيق مختبري",
      description: "في هذا التطبيق ستتمكن من تحميل الدروس الخاصة بك وتشغيلها بلا انترنت!",
      image: "",
    },
    {
      title: "كيف يعمل؟",
      description: "ادخل على المرحلة الدراسية التي انت بها ثم ادخل على السنة وبعدها اختر الفصل الدراسي الذي انت به وسيحمل التطبيق الدروس.<br> انتظر لحظات حتى انتهاء التحميل ثم ستظهر الفيديوهات واحدا تلوا الآخر.",
      image: "",
    },
  ];

  GoToFirst()  {
    this.navCtrl.push(FirstlyGradePage);
  }
  GoToSecond()  {
    this.navCtrl.push(MiddileGradePage);
  }
  GoToThird()  {
    this.navCtrl.push(HighschoolGradePage);
  }


}
