import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Funcionario } from 'src/app/models/funcionario';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';
import { MensagemService } from 'src/app/services/mensagem.service';

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
    private router: Router,
    private mensagemService: MensagemService,private confirmService: ConfirmDialogService
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
    const result$ = this.confirmService.abrir("Deseja excluir este funcionario?")
    result$.asObservable()
      .pipe(
        take(1),
      ).subscribe({
        next: (value) => {
          if (value) {
            this.service.delete(this.funcionario.id!).subscribe((resposta) => {
              this.router.navigate(['funcionarios'])
              this.mensagemService.add('Funcionario deletado com sucesso!')
            }, err => {
              this.mensagemService.add(err.error.error)
            })
          }
        },
      })

  }

  cancel(): void {
    this.router.navigate(['funcionarios'])
  }

}
