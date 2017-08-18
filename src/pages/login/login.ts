import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController,AlertController,LoadingController  } from 'ionic-angular';
import { Auth } from '@ionic/cloud-angular';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username:string = '';
  password:string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController
  ,public alertCtrl: AlertController,public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(username, password) {
    // if (username === '' || password === '') {
    //   let alert = this.alertCtrl.create({
    //     title: 'Error',
    //     subTitle: 'All fields are rquired',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    //   return;
    // }

    // let loader = this.loadingCtrl.create({
    //   content: "Logging in..."
    // });
    // loader.present();

    // this.auth.login('basic', { 'username': username, 'password': password }).then(() => {
    //   console.log('ok i guess?');
    //   loader.dismissAll();
      this.navCtrl.push(TabsPage);
    // }, (err) => {
    //   loader.dismissAll();
    //   console.log(err.message);

    //   let errors = '';
    //   if (err.message === 'UNPROCESSABLE ENTITY') errors += 'username isn\'t valid.<br/>';
    //   if (err.message === 'UNAUTHORIZED') errors += 'Password is required.<br/>';

    //   let alert = this.alertCtrl.create({
    //     title: 'Login Error',
    //     subTitle: errors,
    //     buttons: ['OK']
    //   });
    //   alert.present();
    // });

  }

}
