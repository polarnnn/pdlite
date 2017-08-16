import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the PopoverPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popover',
  template:  `
    <ion-list>
      <ion-list-header>ตั้งค่า</ion-list-header>
      <ion-item class="popover" (click)="SetRoundOrDay()">
        <ion-label>บันทึกต่อรอบ</ion-label>
        <ion-radio value="round"></ion-radio>
      </ion-item>
       <ion-item class="popover" (click)="SetRoundOrDay()">
        <ion-label>บันทึกต่อวัน</ion-label>
        <ion-radio value="day"></ion-radio>
      </ion-item>
    </ion-list>
  `,
})
export class PopoverPage {
  isRound: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
    
  }

  SetRoundOrDay() {
    if (this.isRound) console.log('ROUND');
    else console.log('DAY');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopoverPage');
  }

}
