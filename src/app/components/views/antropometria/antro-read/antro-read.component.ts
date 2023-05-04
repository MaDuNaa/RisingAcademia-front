import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Antropometria } from 'src/app/models/antropometria';
import { AlunoService } from 'src/app/services/aluno.service';
import { AntropometriaService } from 'src/app/services/antropometria.service';

@Component({
  selector: 'app-antro-read',
  templateUrl: './antro-read.component.html',
  styleUrls: ['./antro-read.component.css']
})
export class AntroReadComponent implements OnInit {

  antropometrias: any[] = [];

  constructor(private service: AntropometriaService, private router: Router,
     private route: ActivatedRoute, private alunoService: AlunoService) { }

  ngOnInit(): void {
    if (this.route.snapshot.params['id']) {
       this.findOne(this.route.snapshot.params['id']);
    } else {
      this.findAll();
    }
  }

  findOne(id: string) {
     this.alunoService.findById(id).subscribe({
      next : (value) => {
          this.antropometrias.push(value.antropometria);
      },
      error : (err) => {
          
      },
     })
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
