import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// import { HomePage } from '../home/home';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';
// import { TimelinePage } from '../timeline/timeline';
// import { UrinePage } from '../urine/urine';
// import { NoticePage } from '../notice/notice';
// import { ResultPage } from '../result/result';
// import { AddroundPage } from '../addround/addround';
// import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the HelpPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {
  public items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('ionViewDidLoad HelpPage');
  }

  ionViewDidLoad() {
    this.items = [
      'บันทึกล้างไตต่อรอบ',
      'บันทึกล้างไตต่อวัน',
      'ดู/แก้ไขข้อมูล',
      'บันทึกปัสสาวะ',
      'การแจ้งเตือน',
      'ดูการแสดงผล'
    ];
  }

 itemSelected(item: string) {
    console.log("Selected Item", item);
  }

  goBack() {
    this.navCtrl.pop();
  }

  sendpic(){
    console.log("sendpic");
    
  }

  contact(){
    console.log("contact");

  }

  logout(){
    console.log("logout!!!");

  }

}
