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
  quantidade: 0;
  errorNumeroInvalido = '';

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
      this.quantidade = 0;
     }

  ngOnInit(): void {
    this.aluno.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
    this.carregarDadosMensalidade(this.aluno.id);
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

  pagarMensalidade( quantidadeMensalidade: number): void {
    if(quantidadeMensalidade > 0) {
      if(this.aluno.id) {
        this.alunoService.pagarMensalidade(this.aluno.id, quantidadeMensalidade).subscribe(
          aluno => {
            // Lógica para tratar a resposta do serviço Java
            console.log(`Aluno ${aluno.nome} pagou ${quantidadeMensalidade} parcelas`);
            if (aluno.id) {
              this.mensagemService.add("Mensalidade paga com sucesso");
              this.carregarDadosMensalidade(aluno.id);
              this.findById();
            }
          },
          error => {
            // Lógica para tratar erros
            console.error('Erro ao pagar a mensalidade:', error);
          }
        );
        this.errorNumeroInvalido = "";
      } else {
        console.error('Erro ao pagar a mensalidade, aluno desconhecido:');
      }
    } else {
      this.errorNumeroInvalido = "Quantidade não pode ser menor ou igual a 0.";
    }

  }

  carregarDadosMensalidade(id: String): void {
    this.alunoService.getDadosDeMensalidade(id).subscribe(
      dados => {
        this.dadosMensalidade = dados;
      },
      error => {
        console.error('Erro ao carregar dados de mensalidade:', error);
      }
    );
  }

}
