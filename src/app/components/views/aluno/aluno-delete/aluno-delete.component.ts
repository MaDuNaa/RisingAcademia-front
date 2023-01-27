import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-delete',
  templateUrl: './aluno-delete.component.html',
  styleUrls: ['./aluno-delete.component.css']
})
export class AlunoDeleteComponent implements OnInit {

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

  constructor(private service: AlunoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.aluno.id!).subscribe((resposta) => {
      this.aluno.nome = resposta.nome;
      this.aluno.telefone = resposta.telefone;
      this.aluno.objetivo = resposta.objetivo;
      this.aluno.email = resposta.email;
      this.aluno.mensalidade = resposta.mensalidade;
      this.aluno.diaVencimento = resposta.diaVencimento;
      this.aluno.endereco = resposta.endereco;
      this.aluno.dataNasci = resposta.dataNasci;
    })
  }

  delete(): void {
    this.service.delete(this.aluno.id!).subscribe((resposta) => {
      this.router.navigate(['alunos'])
      this.service.mensagem('Aluno deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

}
