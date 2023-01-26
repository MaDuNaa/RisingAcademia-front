import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {

  alunos: Aluno[] = [];
  displayedColumns: string[] = ["id", "nome", "telefone",  "objetivo",
   "acoes"];

  constructor(private service: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.alunos = resposta;
    });
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["alunos/create"])
  }

}
