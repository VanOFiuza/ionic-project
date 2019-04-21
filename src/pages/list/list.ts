import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AdicionarLivroPage } from '../adicionar-livro/adicionar-livro';
import { LivroPage } from '../livro/livro';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
   
  }

  goToAdicionarLivro(){	
    this.navCtrl.push(AdicionarLivroPage);
  }
  goToLivro(){	
    this.navCtrl.push(LivroPage);
  }


}

