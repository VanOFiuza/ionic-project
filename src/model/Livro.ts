import { Editora } from "./Editora";
import { Autor } from "./Autor";


export interface Livro{	  
      editora: Editora;
      autor: Autor;
      titulo:string;
      subtitulo:string;
      capa:string;
      isbn:string;				
      publicacao:string;
      pagina:string;
    } 