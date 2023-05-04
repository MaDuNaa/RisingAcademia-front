import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Treino } from 'src/app/models/treino';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-read',
  templateUrl: './treino-read.component.html',
  styleUrls: ['./treino-read.component.css']
})
export class TreinoReadComponent implements OnInit {

  treinos: Treino[] = [];
  searchText = '';
  public paginaAtual = 1;


  constructor(private service: TreinoService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.treinos = resposta;
    });

  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["treinos/create"])
  }

}
