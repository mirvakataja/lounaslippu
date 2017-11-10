import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TicketPage } from '../../pages/ticket/ticket';

/**
 * Generated class for the MobilepayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mobilepay',
  templateUrl: 'mobilepay.html',
})
export class MobilepayPage {

  navigateToTicket() {
    this.navCtrl.push(TicketPage);
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MobilepayPage');
  }

}

// Mirva Kataja 1501537, Jani Antoniou 1601110
