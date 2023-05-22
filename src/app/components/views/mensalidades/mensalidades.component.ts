import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-mensalidades',
  templateUrl: './mensalidades.component.html',
  styleUrls: ['./mensalidades.component.css']
})
export class MensalidadesComponent implements OnInit {

  alunos: Aluno[];
  dadosMensalidade: any;

  aluno: Aluno = {
    id: "",
    nome: "",
    telefone: "",
    objetivo: "",
    email: "",
    mensalidade: "",
    diaVencimento: 0,
    quantidadeMensalidadesPagas: " ",
    dataPagamento: 0,
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
      rua: "",
      numero: "",
      bairro: "",
    },
    dataNasci: 0,
  };

  constructor(private alunoService: AlunoService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagemService: MensagemService) {

      this.alunos = [];
     }

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
    this.carregarDadosMensalidade();
    // this.carregarAluno('id');
  }

  // carregarAluno(id: string): void {
  //   this.alunoService.findById(id).subscribe(
  //     aluno => {
  //       this.aluno = aluno;
  //     },
  //     error => {
  //       console.error('Erro ao carregar aluno:', error);
  //     }
  //   );
  // }

  findById(): void {
    this.alunoService.findById(this.aluno.id!).subscribe((resposta) => {
      this.aluno.nome = resposta.nome;
      this.aluno.telefone = resposta.telefone;
      this.aluno.objetivo = resposta.objetivo;
      this.aluno.quantidadeMensalidadesPagas = resposta.quantidadeMensalidadesPagas;
      this.aluno.dataPagamento = resposta.dataPagamento;
      this.aluno.email = resposta.email;
      this.aluno.mensalidade = resposta.mensalidade;
      this.aluno.diaVencimento = resposta.diaVencimento;
      this.aluno.endereco = resposta.endereco;
      this.aluno.dataNasci = resposta.dataNasci;
    });
  }

  atualizarMensalidades(): void {
    this.alunoService.atualizarMensalidades().subscribe(
      response => {
        // Lógica para tratar a resposta do serviço Java
        console.log('Mensalidades atualizadas com sucesso!');
      },
      error => {
        // Lógica para tratar erros
        console.error('Erro ao atualizar as mensalidades:', error);
      }
    );
  }


  pagarMensalidade(id: string, quantidadeMensalidade: string): void {
    this.alunoService.pagarMensalidade(id, quantidadeMensalidade).subscribe(
      aluno => {
        // Lógica para tratar a resposta do serviço Java
        console.log(`Aluno ${aluno.nome} pagou ${quantidadeMensalidade} parcelas`);
      },
      error => {
        // Lógica para tratar erros
        console.error('Erro ao pagar a mensalidade:', error);
      }
    );
  }

  carregarDadosMensalidade(): void {
    this.alunoService.getDadosDeMensalidade().subscribe(
      dados => {
        this.dadosMensalidade = dados;
      },
      error => {
        console.error('Erro ao carregar dados de mensalidade:', error);
      }
    );
  }

}
