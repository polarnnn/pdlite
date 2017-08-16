import { Component } from '@angular/core';
import { NavController, ModalController, NavParams, PopoverController } from 'ionic-angular';

import { AddroundPage } from '../addround/addround';
import { PopoverPage } from '../popover/popover';
import { HelpPage } from '../help/help';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
tab1Root=HomePage;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public popoverCtrl: PopoverController) {   
    console.log('ionViewDidLoad HomePage');
  }

  ionViewDidLoad() {
    
  }

  toHelpPage() {
    this.navCtrl.push(HelpPage);
  }

  addround() {
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

