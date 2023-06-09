import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Antropometria } from 'src/app/models/antropometria';
import { AlunoService } from 'src/app/services/aluno.service';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-detalhe',
  templateUrl: './antro-detalhe.component.html',
  styleUrls: ['./antro-detalhe.component.css']
})
export class AntroDetalheComponent implements OnInit {

  antropometrias: Antropometria[];
  searchText = '';
  public paginaAtual = 1;
  alunos: Aluno[];

  constructor(private service: AntropometriaService, private router: Router,private alunoService: AlunoService) { 
    this.antropometrias = [];
    this.alunos = [];
  }

  ngOnInit(): void {
    this.findAll();
    this.findAllAlunos();
  }

  findAllAlunos() {
    this.alunoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.alunos = resposta;
    });
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.antropometrias = resposta;
    });
  }

}
