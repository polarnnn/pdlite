import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    console.log('ionViewDidLoad UrinePage');
  }

  ionViewDidLoad() {
    
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'แจ้งเตือน',
      subTitle: 'บันทึกข้อมูลเรียบร้อย!',
      buttons: ['OK']
    });
    alert.present();
  }

}
