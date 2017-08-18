import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { TimelinePage } from '../timeline/timeline';
import { UrinePage } from '../urine/urine';
import { NoticePage } from '../notice/notice';
import { ResultPage } from '../result/result';
import { AddroundPage } from '../addround/addround';
/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html'
})
export class PopoverPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  setRoundOrDay(item) {
    if(item == 'round') console.log('round');
    else console.log('day');
  }

}
