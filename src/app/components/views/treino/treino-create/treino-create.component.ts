import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Treino } from 'src/app/models/treino';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-create',
  templateUrl: './treino-create.component.html',
  styleUrls: ['./treino-create.component.css']
})
export class TreinoCreateComponent implements OnInit {

  treino: Treino = {
    id: "",
    dia: "",
    treino: "",
    serie: 0,
    repeticao: 0,
  };

  constructor(private service: TreinoService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.treino).subscribe((resposta) => {
      this.router.navigate(['treinos'])
      this.service.mensagem('Treino criado com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['treinos'])
  }

}
