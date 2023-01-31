import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Antropometria } from 'src/app/models/antropometria';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-create',
  templateUrl: './antro-create.component.html',
  styleUrls: ['./antro-create.component.css']
})
export class AntroCreateComponent implements OnInit {

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

  constructor(private service: AntropometriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.antropometria).subscribe((resposta) => {
      this.router.navigate(['alunos'])
      this.service.mensagem('Antropometria criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['alunos'])
  }

}
