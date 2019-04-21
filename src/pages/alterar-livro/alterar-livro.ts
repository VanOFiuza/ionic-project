import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the AlterarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alterar-livro',
  templateUrl: 'alterar-livro.html',
})
export class AlterarLivroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlterarLivroPage');
  }
  showConfirmacaoAltualizacao() {
    const alert = this.alertCtrl.create({
      title: 'Autorizado',
      subTitle: 'Livro altualizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

}
