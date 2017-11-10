import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MobilepayPage } from '../../pages/mobilepay/mobilepay';
import { CardPage } from '../../pages/card/card';
import { LunchPage } from '../../pages/lunch/lunch';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  navigateToCard() {
    this.navCtrl.push(CardPage);
  }

    navigateToMobilepay() {
      this.navCtrl.push(MobilepayPage);
  }

  navigateToLunch() {
    this.navCtrl.push(LunchPage);
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
