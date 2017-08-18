import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, PopoverController,ViewController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';
import { TimelinePage } from '../timeline/timeline';
import { UrinePage } from '../urine/urine';
import { NoticePage } from '../notice/notice';
import { ResultPage } from '../result/result';
import { AddroundPage } from '../addround/addround';
import { PopoverPage } from '../popover/popover';
import { HelpPage } from '../help/help';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  options = { year: 'numeric', month: '2-digit', day: 'numeric' };
  currentdate = new Date().toLocaleString('th-TH',this.options);

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController, private viewCtrl: ViewController) {
    console.log('ionViewDidLoad HomePage');
   
  }
  ionViewWillEnter() {
    this.viewCtrl.showBackButton(false);
  }

  ionViewDidLoad() {
   
  }

  toDetailRound(){
    let detailroundModal = this.modalCtrl.create(AddroundPage); //(AddroundPage, { Params: value })
    detailroundModal.present();
  }

  toHelpPage() {
    let HelpModal = this.modalCtrl.create(HelpPage); //(HelpPage, { Params: value })
    HelpModal.present();
  }

  toAddround() {
    let addroundModal = this.modalCtrl.create(AddroundPage); //(AddroundPage, { Params: value })
    addroundModal.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }


}

