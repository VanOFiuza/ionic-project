import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class LivroProvider {

  private baseApiPath = 'https://openlibrary.org/api/'
  constructor(public http: Http) {
    console.log('Hello LivroProvider Provider');
  }
  getLivros() { 
        return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9780385495325,ISBN:9780020442202,ISBN:9780451530578,ISBN:9780439064873&format=json&details=true'); 
  }


}
