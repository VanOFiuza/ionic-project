import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AlterarLivroPage } from '../alterar-livro/alterar-livro';
import { AdicionarLivroPage } from '../adicionar-livro/adicionar-livro';

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
  goToAlterarLivro	(){	
    this.navCtrl.push(AlterarLivroPage);
  }
  goToAdicionarLivro	(){	
    this.navCtrl.push(AdicionarLivroPage);
  }

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Excluir',
      message: 'Deseja apagar o livro?',
      buttons: [
        {
          text: 'Não',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sim',
          handler: () => {
            console.log('Agree clicked');
          }
        }
      ]
    });
    confirm.present();
  }
}

