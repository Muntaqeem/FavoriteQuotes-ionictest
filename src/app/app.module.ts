import { QuotesService } from './../services/quotes';
import { TabsPage } from './../pages/tabs/tabs';
import { SettingsPage } from './../pages/settings/settings';
import { QuotesPage } from './../pages/quotes/quotes';
import { QuotePage } from './../pages/quote/quote';
import { LibraryPage } from './../pages/library/library';
import { FavoritesPage } from './../pages/favorites/favorites';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    FavoritesPage,
    LibraryPage,
    QuotePage,
    QuotesPage,
    SettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
