import { QuotePage } from './../quote/quote';
import { QuotesService } from './../../services/quotes';
import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {

  quotes: Quote[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private quoteService:QuotesService,
    private modalCtrl: ModalController) {
  }
  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavoriteQuotes();
  }
  
  onViewQuote(quote:Quote)
  {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.onDidDismiss((remove:boolean) => {
      console.log(remove);
      if(remove)
      {
        this.quoteService.removeQuoteFromFavorites(quote);
        this.quotes = this.quoteService.getFavoriteQuotes();
      }
    });
    modal.present();
   
  }

}
