import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-delete',
  templateUrl: './funcionario-delete.component.html',
  styleUrls: ['./funcionario-delete.component.css']
})
export class FuncionarioDeleteComponent implements OnInit {

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

  constructor(
    private service: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.funcionario.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.funcionario.id!).subscribe((resposta) => {
      this.funcionario.nome = resposta.nome;
      this.funcionario.telefone = resposta.telefone;
      this.funcionario.email = resposta.email;
      this.funcionario.endereco = resposta.endereco;
      this.funcionario.dataNasci = resposta.dataNasci;
      this.funcionario.funcao = resposta.funcao;
    });
  }

  delete(): void {
    this.service.delete(this.funcionario.id!).subscribe((resposta) => {
      this.router.navigate(['funcionarios'])
      this.service.mensagem('Funcionario deletado com sucesso!')
    }, err => {
      this.service.mensagem(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}
