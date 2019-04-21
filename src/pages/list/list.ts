import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AdicionarLivroPage } from '../adicionar-livro/adicionar-livro';
import { LivroPage } from '../livro/livro';
import { Livro } from '../../model/Livro';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;

  public livros : Livro[];	
	
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {

    var l1 = {editora:{nome:'Benvirá'}, autor:{nome:'Augusto Cury'},titulo:'Um Beijo ou Dois',subtitulo:'Beijo',capa:'' ,isbn:'',publicacao:'', pagina:''}; 
    var l2 = {editora:{nome:' Portfolio Books Usa'}, autor:{nome:'Leo Dias'},titulo:'Furacão Anita',subtitulo:'',capa:'' ,isbn:'',publicacao:'', pagina:''}; 
    var l3 = {editora:{nome:'Sextante'}, autor:{nome:'Cialdini,Robert B.'},titulo:'As Armas da Persuasão',subtitulo:'Como Influenciar e Não Se Deixar Influenciar',capa:'12' ,isbn:'Cód: 4086790',publicacao:'Sextante / Gmt', pagina:'234'};    
    var l4 = {editora:{nome:'Portfolio Books Usa'}, autor:{nome:'dgsjf'},titulo:'Girl Boss',subtitulo:'Us Edition',capa:'3' ,isbn:'9780143108597',publicacao:'Portfolio Books Usa', pagina:'390'};  
     
    
    this.livros = [l1,l2,l3,l4];
 
  }

  goToAdicionarLivro(){	
    this.navCtrl.push(AdicionarLivroPage);
  }
  irParaDetalhe(livro:Livro):void{ 
    this.navCtrl.push(LivroPage, {livroSelecionado: livro});
  } 


}

