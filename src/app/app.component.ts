import { Component, Renderer2 } from '@angular/core';
import {NgForm} from '@angular/forms';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Proyectoweb_ispc';

  constructor(private renderer: Renderer2){

  }

  /*Cada click que haga, me imprimirá en la consola en que ubicación se encuentra*/
  ngOnInit(){
    /*
    this.renderer.listen("document", "click", (e) => {
      console.log(e.clientX);
      console.log(e.clientY);
    });
    */
  }


 comprobarLogin(){
  if (typeof (Storage) !== 'undefined') {
    console.log("Localstorage disponible");
} else {
    console.log("Incompatible con localstorage");
}
 }
  
}
