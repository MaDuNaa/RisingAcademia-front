import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { Antropometria } from 'src/app/models/antropometria';
import { AlunoService } from 'src/app/services/aluno.service';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-create',
  templateUrl: './antro-create.component.html',
  styleUrls: ['./antro-create.component.css']
})
export class AntroCreateComponent implements OnInit {

  aluno: any; // Alterar tipo
  antropometria: Antropometria = {
    id: "",
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

  };

  constructor(private service: AlunoService, private router: Router) {
    const nav = this.router.getCurrentNavigation();
    console.log(nav?.extras.state);
    this.aluno = nav!.extras.state;
  }

  ngOnInit(): void {
  }

  create(): void {
    this.aluno.antropometria = this.antropometria;

    this.service.create(this.aluno).subscribe((resposta) => {
      this.router.navigate(['antropometrias/create'])
      this.service.mensagem('Aluno criado com sucesso!');
    }, err => {
      // for (let i = 0; i < err.error.errors.length; i++) {
      //   this.service.mensagem(err.error.errors[i].message)
      // }
      console.log(err)
    })
    // this.service.create(this.antropometria).subscribe((resposta) => {
    //   this.router.navigate(['alunos'])
    //   this.service.mensagem('Antropometria criado com sucesso!');
    // }, err => {
    //   for (let i = 0; i < err.error.errors.length; i++) {
    //     this.service.mensagem(err.error.errors[i].message)
    //   }
    // })
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

}
