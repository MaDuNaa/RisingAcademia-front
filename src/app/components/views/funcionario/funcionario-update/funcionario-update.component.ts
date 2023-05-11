import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-funcionario-update',
  templateUrl: './funcionario-update.component.html',
  styleUrls: ['./funcionario-update.component.css']
})
export class FuncionarioUpdateComponent implements OnInit {

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
    private router: Router,
    private mensagemService: MensagemService
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

  update(): void {
    this.service.update(this.funcionario).subscribe((resposta) => {
      this.router.navigate(["funcionarios"]);
      this.mensagemService.add("Funcionario atualizado com sucesso");
    }, err => {
      this.mensagemService.add('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}
