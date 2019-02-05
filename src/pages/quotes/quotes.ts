import { QuotesService } from './../../services/quotes';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from './../../data/quote.interface';


@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
    private quoteService: QuotesService) { }

  quoteGroup: { category: string, quotes: Quote[], icon: string };
  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: "Are you sure you want to add this to favorite?",
      buttons: [
        {
          text: "Yes, go ahead",
          handler: () => {
            this.quoteService.addQuoteToFavorites(selectedQuote);
            console.log("Okay");
          }
        },
        {
          text: "No, I changed my mind",
          role: 'cancel',
          handler: () => {
            console.log("cancelled");
          }
        }
      ]
    });

    alert.present();
  }

  onRemoveFromFavorite(quote: Quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }


}
