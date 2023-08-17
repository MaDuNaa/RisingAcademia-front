import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent implements OnInit {

  contagem: number = 0;

  constructor(private alunoService: AlunoService) { }

  ngOnInit(): void {
    this.carregarContagem();
  }

  carregarContagem(): void {
    this.alunoService.obterContagemAlunosPorMes().subscribe(contagem => {
      this.contagem = contagem;
    });
  }

  atualizarContagem(): void {
    this.carregarContagem();
  }

}
