import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
  person: string;
  text: string;
  quote:Quote;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewCtrl:ViewController) {
    console.log(navParams.data);   
    this.quote = navParams.data;
  }
  onClose(remove=false){
    this.viewCtrl.dismiss(remove);
  }

  
}
