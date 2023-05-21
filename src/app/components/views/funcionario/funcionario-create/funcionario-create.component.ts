import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-funcionario-create',
  templateUrl: './funcionario-create.component.html',
  styleUrls: ['./funcionario-create.component.css']
})
export class FuncionarioCreateComponent implements OnInit {

  funcionario: Funcionario = {
    id: "",
    nome: " ",
    telefone: " ",
    email: " ",
    endereco: {
      rua: " ",
      numero: " ",
      bairro: " ",
    },
    dataNasci: 0,
    funcao: " ",
  };

  constructor(private service: FuncionarioService, private router: Router,
    private mensagemService: MensagemService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.funcionario).subscribe((resposta) => {
      this.router.navigate(['funcionarios'])
      this.mensagemService.add('Funcionario criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}
