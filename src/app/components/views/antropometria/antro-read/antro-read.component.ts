import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Antropometria } from 'src/app/models/antropometria';
import { AlunoService } from 'src/app/services/aluno.service';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-read',
  templateUrl: './antro-read.component.html',
  styleUrls: ['./antro-read.component.css']
})
export class AntroReadComponent implements OnInit {

  antropometrias: any[] = [];
  alunos: Aluno[];
  searchText = '';
  public paginaAtual = 1;

  constructor(private service: AntropometriaService, private router: Router,
     private route: ActivatedRoute, private alunoService: AlunoService) { 
      this.alunos = [];
     }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
       this.findOne(this.route.snapshot.params['id']);
    } else {
      this.findAll();
    }

    this.findAllAlunos();
  }

  encontrarAluno(alunoId: string): String {
    const aluno = this.alunos.find(aluno => aluno.id === alunoId);
    return aluno ? aluno.nome : '';
  }

  findAllAlunos() {
    this.alunoService.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.alunos = resposta;
    });
  }

  findOne(id: string) {
     this.alunoService.findById(id).subscribe({
      next : (value) => {
          this.antropometrias.push(value.antropometria);
      },
      error : (err) => {
          
      },
     })
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.antropometrias = resposta;
    });
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["antropometrias/create"])
  }


}
