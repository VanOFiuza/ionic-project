import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AlterarLivroPage } from '../alterar-livro/alterar-livro';

/**
 * Generated class for the LivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livro',
  templateUrl: 'livro.html',
})
export class LivroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LivroPage');
  }
  goToAlterarLivro(){	
    this.navCtrl.push(AlterarLivroPage);
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
