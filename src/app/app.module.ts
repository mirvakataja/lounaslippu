// Mirva Kataja 1501537, Jani Antoniou 1601110

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LunchPage } from '../pages/lunch/lunch';
import { CardPage } from '../pages/card/card';
import { PaymentPage } from '../pages/payment/payment';
import { TicketPage } from '../pages/ticket/ticket';
import { MenuPage } from '../pages/menu/menu';
import { MobilepayPage } from '../pages/mobilepay/mobilepay';

const firebaseAuth = {
  apiKey: "AIzaSyA7eP3HMFm4IWLH6Pa9g9VGyxlLT-0NTxE",
  authDomain: "laurea-lounaslippu.firebaseapp.com",
  databaseURL: "https://laurea-lounaslippu.firebaseio.com",
  projectId: "laurea-lounaslippu",
  storageBucket: "laurea-lounaslippu.appspot.com",
  messagingSenderId: "554001648042"
};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    LunchPage,
    CardPage,
    PaymentPage,
    TicketPage,
    MenuPage,
    MobilepayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    LunchPage,
    CardPage,
    PaymentPage,
    TicketPage,
    MenuPage,
    MobilepayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
