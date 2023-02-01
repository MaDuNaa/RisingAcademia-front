import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-funcionario-read',
  templateUrl: './funcionario-read.component.html',
  styleUrls: ['./funcionario-read.component.css']
})
export class FuncionarioReadComponent implements OnInit {

  funcionarios: Funcionario[] = [];
  displayedColumns: string[] = ["id", "nome", "funcao", "telefone",
   "acoes"];

  constructor(private service: FuncionarioService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((resposta) => {
      console.log(resposta);
      this.funcionarios = resposta;
    });
  }

  navegarParaCategoriaCreate() {
    this.router.navigate(["funcionarios/create"])
  }

}
