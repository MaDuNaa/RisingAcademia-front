import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Antropometria } from 'src/app/models/antropometria';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-read',
  templateUrl: './antro-read.component.html',
  styleUrls: ['./antro-read.component.css']
})
export class AntroReadComponent implements OnInit {

  antropometrias: Antropometria[] = [];
  displayedColumns: string[] = ["id", "torax", "cintura",  "quadril", "antebracoDireito",
   "antebracoEsquerdo", "bracoDireito", "bracoEsquerdo", "coxaDireita", "coxaEsquerda",
    "panturrilhaDireita", "panturrilhaEsquerda", "estatura", "peso",
   "acoes"];

  constructor(private service: AntropometriaService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
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
