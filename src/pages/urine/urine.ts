import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';

// import { HomePage } from '../home/home';
// import { TabsPage } from '../tabs/tabs';
// import { LoginPage } from '../login/login';
// import { TimelinePage } from '../timeline/timeline';
// import { NoticePage } from '../notice/notice';
// import { ResultPage } from '../result/result';
// import { AddroundPage } from '../addround/addround';
// import { PopoverPage } from '../popover/popover';
/**
 * Generated class for the UrinePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-urine',
  templateUrl: 'urine.html',
})
export class UrinePage {
  options = { year: 'numeric', month: '2-digit', day: 'numeric' };
  optionstime = { hour: '2-digit', minute: '2-digit' };
  currentdate = new Date().toLocaleString('th-TH', this.options);
  currenttime = new Date().toLocaleString('th-TH', this.optionstime);

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public toastCtrl: ToastController) {
    console.log('ionViewDidLoad UrinePage');
  }

  ionViewDidLoad() {

  }

  addurine() {
    let toast = this.toastCtrl.create({
      message: 'บันทึกปัสสาวะเรียบร้อย..',
      duration: 1000
    });
    
    let prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: "คุณยืนยันการบันทึกปัสสาวะใช่หรือไม่",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel addurine..');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            console.log('addurine Complete !!!');
            toast.present();
          }
        }
      ]
    });
    prompt.present();
  }

}
