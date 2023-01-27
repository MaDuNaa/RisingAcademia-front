import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    id: "",
    nome: "",
    telefone: "",
    objetivo: "",
    email: "",
    mensalidade: "",
    diaVencimento: 0,
    endereco: {
      rua: "",
      numero: "",
      bairro: "",
    },
    dataNasci: 0,
  };

  constructor(private service: AlunoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.aluno).subscribe((resposta) => {
      this.router.navigate(['alunos'])
      this.service.mensagem('Aluno criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

}
