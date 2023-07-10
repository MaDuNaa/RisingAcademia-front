import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { LoginService } from 'src/app/services/login.service';
import { MensagemService } from 'src/app/services/mensagem.service';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})

export class ConfigComponent implements OnInit {

  nomeUsuario = "";
  isAdmin: boolean = false;
  isUser: boolean = false;

  constructor( private loginService: LoginService, 
    private confirmService: ConfirmDialogService, 
    private mensagemService: MensagemService,
) { }

  ngOnInit(): void {
    this.nomeUsuario = this.loginService.getNome();
    
    const userRole = this.loginService.getRole();

    if (userRole === 'ROLE_ADMN') {
      this.isAdmin = true;
    } else if (userRole === 'ROLE_RH') {
      this.isUser = true;
    } 
  }
  

}
