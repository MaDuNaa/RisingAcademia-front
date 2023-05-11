import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-aluno-create',
  templateUrl: './aluno-create.component.html',
  styleUrls: ['./aluno-create.component.css']
})
export class AlunoCreateComponent implements OnInit {

  aluno: Aluno = {
    id: "",
    nome: " ",
    telefone: " ",
    objetivo: " ",
    email: " ",
    mensalidade: " ",
    diaVencimento: 0,
    antropometria: {
      torax: " ",
      cintura: " ",
      quadril: " ",
      antebracoDireito: " ",
      antebracoEsquerdo: " ",
      bracoDireito: " ",
      bracoEsquerdo: " ",
      coxaDireita: " ",
      coxaEsquerda: " ",
      pantorilhaDireita: " ",
      pantorilhaEsquerda: " ",
      estatura: " ",
      peso: " ",
    },
    endereco: {
      rua: " ",
      numero: " ",
      bairro: " ",
    },
    dataNasci: 0,
  };

  constructor(private service: AlunoService, private router: Router,
    private mensagemService: MensagemService) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.aluno).subscribe((resposta) => {
      this.router.navigate(['antropometrias/create'])
      this.mensagemService.add('Aluno criado com sucesso!');
    }, err => {
      for (let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })

  }

  navigateByState(): void {
    this.service.create(this.aluno).subscribe((resposta) => {
    this.mensagemService.add("Aluno criado com sucesso!");
    this.router.navigateByUrl('/antropometrias/create', { state: this.aluno })
  });
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

}
