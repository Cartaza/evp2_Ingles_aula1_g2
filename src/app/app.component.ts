import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectowebAngular';
  public menu : boolean;
  public promoMensual = 300;
  public promoSemestral = 500;
  public promoAnual = 900;
  logueado = localStorage.getItem("usuario");
  promoElegida = localStorage.getItem("precio");
  promo = localStorage.getItem("promo");
  

  signupForm: FormGroup;

  constructor(private _builder: FormBuilder){
    
     this.menu = false;
     this.promoAnual = this.promoAnual;
     this.promoMensual = this.promoMensual;
     this.promoSemestral = this.promoSemestral;
    this.logueado = this.logueado;
    this.promoElegida = this.promoElegida;
    this.promo = this.promo;

    this.signupForm = this._builder.group({
     usuario: ['', Validators.required],
     email:['', [Validators.required, Validators.email]] ,
     clave:['', Validators.required]
   })
  }

  enviar(values: any){
    console.log(values);
    localStorage.setItem("usuario", JSON.stringify(values));
  }

  abrirMenu(){
    this.menu = true;
  }

  cerrarMenu(){
    this.menu = false;
  }

  cerrarSesion(){
    /*REMOVER DEL LOCALSTORAGE */
    localStorage.removeItem("usuario");
  }


  /*ELIGE LA PROMO*/
  eligePromo1(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
    }else{
      localStorage.setItem("promo", "PROMO MENSUAL");
      localStorage.setItem("precio", "300");
    }
   }

   eligePromo2(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
    }else{
      localStorage.setItem("promo", "PROMO SEMESTRAL");
    localStorage.setItem("precio", "500");
    }
   }

   eligePromo3(){
    if( this.logueado == null){
      alert("Debes iniciar sesion para continuar");
    }else{
      localStorage.setItem("promo", "PROMO ANUAL");
      localStorage.setItem("precio", "900");
    }
   }
 
  
   promoCarrito(){
   

   }




}
