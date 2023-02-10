import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from 'src/app/models/aluno';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.component.html',
  styleUrls: ['./perfil-usuario.component.css']
})
export class PerfilUsuarioComponent implements OnInit {
  aluno: any;
  constructor(private router: Router,
    private route: ActivatedRoute) {
      const nav = this.router.getCurrentNavigation();
      this.aluno = nav!.extras.state;
      console.log(this.aluno);
    }

  ngOnInit(): void {

  }


  adicionarTreino() {
       this.router.navigateByUrl('/treinos/create', {state: this.aluno });
  }

}
