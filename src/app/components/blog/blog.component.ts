import { Component } from '@angular/core';
import { INews } from '../../interfaces/inews.interface';
import { NOTICIAS } from '../../db/noticias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  arrayNoticias: INews[] = NOTICIAS;

  //Propeidad de HTML -> Propertie Binding []

  //Interpolacion -> Es contenido -> {{}}

  formulario: INews = {titulo:"", imagen:"", texto:"", publicacion:""}
  
  guardarData(){
    if (this.formulario.imagen != "" && this.formulario.publicacion != "" && this.formulario.texto != "" && this.formulario.titulo != "")
    {
      this.arrayNoticias.push({...this.formulario}); //Estoy haciendo uan copia y dejandola en this formulario
      console.log(this.arrayNoticias)
      this.formulario = {titulo:"", imagen:"", texto:"", publicacion:""};
    }
    else{
      alert("ERROR, TIENES QUE RELLENAR TODOS LOS CAMPOS")
    }
  }
}
