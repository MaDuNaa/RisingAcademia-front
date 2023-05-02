import { Component, OnInit } from '@angular/core';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-mensagem',
  templateUrl: './mensagem.component.html',
  styleUrls: ['./mensagem.component.css']
})
export class MensagemComponent implements OnInit {

  public mensagem: string

  constructor(public mensagemService: MensagemService) { 
    this.mensagem = '';
  }

  ngOnInit(): void {
    this.mensagem = this.mensagemService.mensagem;
  }

  close(): void {
    this.mensagemService.clear();
  }


}
