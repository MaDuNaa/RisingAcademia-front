import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-perfil-funcionario',
  templateUrl: './perfil-funcionario.component.html',
  styleUrls: ['./perfil-funcionario.component.css']
})
export class PerfilFuncionarioComponent implements OnInit {

  funcionario: any;

  constructor(private router: Router,
    private route: ActivatedRoute) {
      const nav = this.router.getCurrentNavigation();
      this.funcionario = nav!.extras.state;
      console.log(this.funcionario);
     }

  ngOnInit(): void {
  }

}
