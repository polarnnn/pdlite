import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';

/**
 * Generated class for the NoticePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notice',
  templateUrl: 'notice.html',
})
export class NoticePage {
  public items: string[];

  options = { year: 'numeric', month: '2-digit', day: 'numeric' };
  optionstime = { hour: '2-digit', minute: '2-digit' };
  currentdate = new Date().toLocaleString('th-TH', this.options);
  currenttime = new Date().toLocaleString('th-TH', this.optionstime);


  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.items = [
      'Pokémon Yellow',
      'Super Metroid',
      'Mega Man X',
      'The Legend of Zelda',
      'Pac-Man',
      'Super Mario World',
      'Street Fighter II',
      'Half Life',
      'Final Fantasy VII',
      'Star Fox',
      'Tetris',
      'Donkey Kong III',
      'GoldenEye 007',
      'Doom',
      'Fallout',
      'GTA',
      'Halo'
    ];
    console.log('ionViewDidLoad NoticePage');
  }

  delCard() {
    let toast = this.toastCtrl.create({
      message: 'ลบรายการเรียบร้อย..',
      duration: 1000
    });

    let actionSheet = this.actionSheetCtrl.create({
      title: 'ลบรายการนี้ใช่หรือไม่',
      buttons: [
        {
          text: 'ลบ',
          role: 'delete',
          handler: () => {
            console.log('Delete Notification..');
            toast.present();
          }
        }, {
          text: 'ยกเลิก',
          role: 'cancel',
          handler: () => {
            console.log('Cancel Delete Notification..');
          }
        }
      ]
    });
    actionSheet.present();
  }


}
