import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Treino } from 'src/app/models/treino';
import { AlunoService } from 'src/app/services/aluno.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-create',
  templateUrl: './treino-create.component.html',
  styleUrls: ['./treino-create.component.css']
})
export class TreinoCreateComponent implements OnInit {

  aluno: any;
  treinos: Treino[];
  searchText = '';
  public paginaAtual = 1;
  sortedData: Treino[];
  selecionado: any;

  treino: Treino = {
    id: "",
    dia: "",
    treino: "",
    serie: 0,
    repeticao: 0,
  };

  treinoId: any;

  constructor(private service: TreinoService, private router: Router,
    private route: ActivatedRoute,
    private alunoService: AlunoService, 
    private mensagemService: MensagemService, private confirmService: ConfirmDialogService) {
      const nav = this.router.getCurrentNavigation();
       this.aluno = nav?.extras.state;
       console.log(this.aluno.alunoIndividual);
      this.service.findAll().subscribe((resposta) => {
        console.log(resposta);
        this.treinos = resposta;
      });

      this.sortedData = [];
      this.treinos = [];
      
  }

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

  adicionarTreino() {

    this.aluno.alunoIndividual.treino.push(this.selecionado);
    this.alunoService.update(this.aluno.alunoIndividual).subscribe({
      next : (value) => {
          console.log(value);
      },
      error : (err) => {
          console.log(err);
      },
    })
  }

  setId(id: any) {
    this.treinoId = id;
  }

  onRemover(treino:any) {
    if (treino.treino == '') {
      const result$ = this.confirmService.abrir("Deseja excluir este treino?")
      result$.asObservable()
        .pipe(
          take(1),
        ).subscribe({
          next: (value) => {
            if (value) {
              this.aluno.alunoIndividual.treino.splice(this.aluno.alunoIndividual.treino.indexOf(this.treinoId), 1);
              this.mensagemService.add("Treino excluído!");
            }
          },
        })
    }
  }
  


}
