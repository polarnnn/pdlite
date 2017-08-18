import { Component, ViewChild } from '@angular/core';
import { NavController, Tabs } from 'ionic-angular';

import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { TimelinePage } from '../timeline/timeline';
import { UrinePage } from '../urine/urine';
import { NoticePage } from '../notice/notice';
import { ResultPage } from '../result/result';
import { AddroundPage } from '../addround/addround';
import { PopoverPage } from '../popover/popover';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = TimelinePage;
  tab3Root = UrinePage;
  tab4Root = NoticePage;
  tab5Root = ResultPage;

  constructor(public navCtrl: NavController) {
    console.log('ionViewDidLoad TabsPage');
  }

}
