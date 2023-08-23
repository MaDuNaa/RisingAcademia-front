import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';
import { LucroService } from 'src/app/services/lucro.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  contagem: number = 0;
  lucroPrevisto: number | undefined;
  lucroMensal: number | undefined;
  porcentagemMensalidades: string | undefined;

  constructor(private alunoService: AlunoService, private lucroService: LucroService) { }

  ngOnInit(): void {
    this.carregarContagem();
    this.getLucroPrevisto();
    this.getLucroMensal();
    this.getPorcentagemMensalidadesPagas();
  }

  carregarContagem(): void {
    this.alunoService.obterContagemAlunosPorMes().subscribe(contagem => {
      this.contagem = contagem;
    });
  }

  atualizarContagem(): void {
    this.carregarContagem();
  }

  getLucroPrevisto() {
    this.lucroService.getLucroPrevisto().subscribe((lucro: number) => {
      this.lucroPrevisto = lucro;
    });
  }

  getLucroMensal(): void {
    this.lucroService.getLucroMensal().subscribe(
      (lucro) => {
        this.lucroMensal = lucro;
      },
      (error) => {
        console.error('Erro ao obter o lucro mensal:', error);
      }
    );
  }

  getPorcentagemMensalidadesPagas(): void {
    this.lucroService.getPorcentagemMensalidadesPagas()
    .subscribe(porcentagem => {
      const formattedPorcentagem = parseFloat(porcentagem).toFixed(2) + '%';
      this.porcentagemMensalidades = formattedPorcentagem;
    });
  }

}
