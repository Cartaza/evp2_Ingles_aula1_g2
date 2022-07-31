import { Component, ElementRef,Renderer2, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})
export class LoginComponent implements OnInit {

  /*25-07 Le agregé el Renderer2*/


  /*constructor(private renderer: Renderer2){
  }*/
  ngOnInit(): void {

  }


}