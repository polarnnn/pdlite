import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController,ToastController } from 'ionic-angular';

/**
 * Generated class for the AddroundPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addround',
  templateUrl: 'addround.html',
})
export class AddroundPage {
  isDisabled = true;
  optionstime = { hour: '2-digit', minute: '2-digit' };
  currenttime = new Date().toLocaleString('th-TH', this.optionstime);

  in_time = new Date().toLocaleString('th-TH', this.optionstime);
  out_time = new Date().toLocaleString('th-TH', this.optionstime);

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddroundPage');
  }

  goBack() {
    this.navCtrl.pop();
  }

  addround() {
    let toast = this.toastCtrl.create({
      message: 'เพิ่มรอบล้างไตเรียบร้อย..',
      duration: 1000
    });

    let prompt = this.alertCtrl.create({
      title: 'ยืนยัน',
      message: "คุณยืนยันการเพิ่มรอบใช่หรือไม่",
      buttons: [
        {
          text: 'ยกเลิก',
          handler: data => {
            console.log('Cancel Addround..');
          }
        },
        {
          text: 'ยืนยัน',
          handler: data => {
            console.log('Addround Complete !!!');
            toast.present();
            this.navCtrl.pop();
          }
        }
      ]
    });
    prompt.present();
  }

}
