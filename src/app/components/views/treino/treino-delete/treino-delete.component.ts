import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Treino } from 'src/app/models/treino';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { MensagemService } from 'src/app/services/mensagem.service';
import { TreinoService } from 'src/app/services/treino.service';

@Component({
  selector: 'app-treino-delete',
  templateUrl: './treino-delete.component.html',
  styleUrls: ['./treino-delete.component.css']
})
export class TreinoDeleteComponent implements OnInit {

  treino: Treino = {
    id: "",
    dia: "",
    treino: "",
    serie: 0,
    repeticao: 0,
  };

  constructor(private service: TreinoService, private route: ActivatedRoute, 
    private router: Router, private mensagemService: MensagemService,
    private confirmService: ConfirmDialogService) { }

  ngOnInit(): void {
    this.treino.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.treino.id!).subscribe((resposta) => {
      this.treino.dia = resposta.dia;
      this.treino.treino = resposta.treino;
      this.treino.serie = resposta.serie;
      this.treino.repeticao = resposta.repeticao;
    })
  }

  delete(): void {
    const result$ = this.confirmService.abrir("Deseja excluir este treino?")
    result$.asObservable()
      .pipe(
        take(1),
      ).subscribe({
        next: (value) => {
          if (value) {
            this.service.delete(this.treino.id!).subscribe((resposta) => {
              this.router.navigate(['treinos'])
              this.mensagemService.add('Treino deletado com sucesso!')
            }, err => {
              this.mensagemService.add(err.error.error)
            })
          }
        },
      })

  }

  cancel(): void {
    this.router.navigate(['treinos'])
  }

}
