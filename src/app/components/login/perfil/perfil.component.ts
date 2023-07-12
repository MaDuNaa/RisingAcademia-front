import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil';
import { LoginService } from 'src/app/services/login.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil!: Perfil; 

  constructor( private loginService: LoginService, private location: Location,private mensagemService: MensagemService) {
    this.perfil = {
      nomePerfil: '',
    };
   }


  ngOnInit(): void {
    this.perfilUsuario();
  }


  voltarPaginaAnterior(): void {
    this.location.back();
  }

  perfilUsuario() {
  this.loginService.buscarPerfil().subscribe(
    
      response => {
        this.perfil.nomePerfil = response.nomePerfil;
      },
      error => {
        this.mensagemService.add("Erro de Conexão!"),error;
      } 
    );
  }


}
