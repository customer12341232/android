import { HighschoolSubjectsThirdYearSecondSemesterPage } from './../pages/highschool-subjects-third-year-second-semester/highschool-subjects-third-year-second-semester';
import { HighschoolSubjectsFirstYearSecondSemesterPage } from './../pages/highschool-subjects-first-year-second-semester/highschool-subjects-first-year-second-semester';
import { HighschoolGradePage } from './../pages/highschool-grade/highschool-grade';
import { FirstlyGradePage } from './../pages/firstly-grade/firstly-grade';
import { TwelveYearPage } from './../pages/twelvth-year/twelvth-year';
import { ElevenYearPage } from './../pages/eleventh-year/eleventh-year';
import { TenthYearPage } from './../pages/tenth-year/tenth-year';
import { NinethYearPage } from './../pages/ninth-year/ninth-year';
import { EighthYearPage } from './../pages/eighth-year/eighth-year';
import { SeventhYearPage } from './../pages/seventh-year/seventh-year';
import { MiddileGradePage } from './../pages/middile-grade/middile-grade';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { VideoProvider } from '../providers/video/video';


import { FirstYearPage } from '../pages/first-year/first-year';
import { SecondYearPage } from '../pages/second-year/second-year';
import { ThirdYearPage } from '../pages/third-year/third-year';
import { FourthYearPage } from '../pages/fourth-year/fourth-year';
import { FifthYearPage } from '../pages/fifth-year/fifth-year';
import { SixthYearPage } from '../pages/sixth-year/sixth-year';
import { GradePage } from '../pages/grade/grade';

import { ComponentsModule } from '../components/components.module';
import { HighschoolSubjectsFirstYearPage } from '../pages/highschool-subjects-first-year/highschool-subjects-first-year';
import { HighschoolSubjectsSecondYearPage } from '../pages/highschool-subjects-second-year/highschool-subjects-second-year';
import { HighschoolSubjectsSecondYearSecondSemesterPage } from '../pages/highschool-subjects-second-year-second-semester/highschool-subjects-second-year-second-semester';
import { HighschoolSubjectsThirdYearPage } from '../pages/highschool-subjects-third-year/highschool-subjects-third-year';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage ,
    SeventhYearPage,
    EighthYearPage,
    NinethYearPage,
    TenthYearPage,
    ElevenYearPage,
    TwelveYearPage,
    MiddileGradePage,
    FirstlyGradePage,
    GradePage,
    HighschoolGradePage,
    HighschoolSubjectsFirstYearPage,
    HighschoolSubjectsFirstYearSecondSemesterPage,
    HighschoolSubjectsSecondYearPage,
    HighschoolSubjectsSecondYearSecondSemesterPage,
    HighschoolSubjectsThirdYearPage,
    HighschoolSubjectsThirdYearSecondSemesterPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp) ,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstYearPage ,
    SecondYearPage ,
    ThirdYearPage ,
    FourthYearPage ,
    FifthYearPage ,
    SixthYearPage ,
    SeventhYearPage,
    EighthYearPage,
    NinethYearPage,
    TenthYearPage,
    ElevenYearPage,
    TwelveYearPage,
    MiddileGradePage,
    GradePage,
    FirstlyGradePage,
    HighschoolGradePage,
    HighschoolSubjectsFirstYearPage,
    HighschoolSubjectsFirstYearSecondSemesterPage,
    HighschoolSubjectsSecondYearPage,
    HighschoolSubjectsSecondYearSecondSemesterPage,
    HighschoolSubjectsThirdYearPage,
    HighschoolSubjectsThirdYearSecondSemesterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    File,
    FileTransfer,
    StreamingMedia,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VideoProvider
  ]
})
export class AppModule {}
