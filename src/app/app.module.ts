import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AdicionarLivroPageModule} from  '../pages/adicionar-livro/adicionar-livro.module';
import {AlterarLivroPageModule} from  '../pages/alterar-livro/alterar-livro.module';
import {LivroPageModule} from  '../pages/livro/livro.module';
import {HttpModule} from "@angular/http";
import { LivroProvider } from '../providers/livro/livro'; 


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AlterarLivroPageModule,
    AdicionarLivroPageModule,
    LivroPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider
  ]
})
export class AppModule {}
