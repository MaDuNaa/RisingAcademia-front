import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-aluno-read',
  templateUrl: './aluno-read.component.html',
  styleUrls: ['./aluno-read.component.css']
})
export class AlunoReadComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  alunos: Aluno[] = [];
  displayedColumns: string[] = ["id", "nome", "telefone",  "objetivo",
   "acoes"];

   dataSource!: MatTableDataSource<Aluno>;
  constructor(private service: AlunoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();

  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.alunos = resposta;
    });
    this.dataSource.paginator = this.paginator;
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["alunos/create"])
  }

}
