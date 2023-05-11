import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antropometria } from 'src/app/models/antropometria';
import { AntropometriaService } from 'src/app/services/antropometria.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-antro-update',
  templateUrl: './antro-update.component.html',
  styleUrls: ['./antro-update.component.css']
})
export class AntroUpdateComponent implements OnInit {

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
    private mensagemService: MensagemService,
  ) { }

  ngOnInit(): void {
    this.antropometria.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
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

  update(): void {
    this.service.update(this.antropometria).subscribe((resposta) => {
      this.router.navigate(["antropometrias"]);
      this.mensagemService.add("Antropometria atualizada com sucesso");
    }, err => {
      this.mensagemService.add('Validar se todos os campos estão preenchidos corretamente!')
    });
  }

  cancel(): void {
    this.router.navigate(['antropometrias'])
  }

}
