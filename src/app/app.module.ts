import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { TimelinePage } from '../pages/timeline/timeline';
import { UrinePage } from '../pages/urine/urine';
import { NoticePage } from '../pages/notice/notice';
import { ResultPage } from '../pages/result/result';
import { AddroundPage } from '../pages/addround/addround';
import { PopoverPage } from '../pages/popover/popover';
import { HelpPage } from '../pages/help/help';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    TimelinePage,
    UrinePage,
    NoticePage,
    ResultPage,
    AddroundPage,
    PopoverPage,
    HelpPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    TimelinePage,
    UrinePage,
    NoticePage,
    ResultPage,
    AddroundPage,
    PopoverPage,
    HelpPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
