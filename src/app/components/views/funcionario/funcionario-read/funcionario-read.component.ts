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

  funcionarios: Funcionario[];
  searchText = '';
  public paginaAtual = 1;

  constructor(private service: FuncionarioService, private router: Router) { 
    this.funcionarios = [];
  }

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

  redirect(id: any) {
    let funcionarioIndividual = null;
     this.funcionarios.forEach(a => {
       if(a.id == id) {
        funcionarioIndividual = a;
       }
     })
 
     this.router.navigateByUrl('/perfils/Funcionario', { state: {funcionarioIndividual} });
 
   }

}
