import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Antropometria } from 'src/app/models/antropometria';
import { AntropometriaService } from 'src/app/services/antropometria.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-antro-delete',
  templateUrl: './antro-delete.component.html',
  styleUrls: ['./antro-delete.component.css']
})
export class AntroDeleteComponent implements OnInit {

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
	  panturrilhaDireita: " ",
	  panturrilhaEsquerda: " ",
	  estatura: " ",
	  peso: " ",

  };

  constructor(
    private service: AntropometriaService,
    private route: ActivatedRoute,
    private router: Router,
    private mensagemService: MensagemService,private confirmService: ConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.antropometria.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }

  findById(): void {
    this.service.findById(this.antropometria.id!).subscribe((resposta) => {
      this.antropometria.torax = resposta.torax;
      this.antropometria.cintura = resposta.cintura;
      this.antropometria.quadril = resposta.quadril;
      this.antropometria.antebracoDireito = resposta.antebracoDireito;
      this.antropometria.antebracoEsquerdo = resposta.antebracoEsquerdo;
      this.antropometria.bracoDireito = resposta.bracoDireito;
      this.antropometria.bracoEsquerdo = resposta.bracoEsquerdo;
      this.antropometria.coxaDireita = resposta.coxaDireita;
      this.antropometria.coxaEsquerda = resposta.coxaEsquerda;
      this.antropometria.panturrilhaDireita = resposta.panturrilhaDireita;
      this.antropometria.panturrilhaEsquerda = resposta.panturrilhaEsquerda;
      this.antropometria.estatura = resposta.estatura;
      this.antropometria.peso = resposta.peso;

    });

  }

    delete(): void {
      const result$ = this.confirmService.abrir("Deseja excluir esta antropometria?")
      result$.asObservable()
        .pipe(
          take(1),
        ).subscribe({
          next: (value) => {
            if (value) {
              this.service.delete(this.antropometria.id!).subscribe((resposta) => {
                this.router.navigate(["antropometrias"]);
                this.mensagemService.add("Antropometria deletada com sucesso");
              }, err => {
                this.mensagemService.add(err.error.error)
              });
            }
          },
        })

      
    }

    cancel(): void {
      this.router.navigate(['antropometrias'])
    }

}
