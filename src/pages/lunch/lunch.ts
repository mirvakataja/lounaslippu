import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

import { MenuPage } from '../../pages/menu/menu';
import { PaymentPage } from '../../pages/payment/payment';

/**
 * Generated class for the ValintaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lunch',
  templateUrl: 'lunch.html',
})
export class LunchPage {

  navigateToMenu() {
    this.navCtrl.push(MenuPage);
  }

    navigateToPayment() {
      this.navCtrl.push(PaymentPage);
  }

  constructor(private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if (data && data.email && data.uid) { 
      this.toast.create({
        message: 'Welcome to Laurea Lunchticket app!',
        duration: 5000
      }).present();
    }
    else {
      this.toast.create({
        message: 'Could not find authentication details',
        duration: 3000
      }).present();
    }
    })
  }
  
}

// Mirva Kataja 1501537, Jani Antoniou 1601110