import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Antropometria } from 'src/app/models/antropometria';
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

  constructor(private service: AntropometriaService, private router: Router,) { 
    this.antropometrias = [];
  }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.antropometrias = resposta;
    });
  }

}
