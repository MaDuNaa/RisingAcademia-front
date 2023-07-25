import { Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter, map, switchMap, take } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MensagemService } from 'src/app/services/mensagem.service';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { LoginService } from 'src/app/services/login.service';
import { EMPTY, of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  title = 'bookstore-front';

  nomeUsuario = "";
  isAdmin: boolean = false;
  isUser: boolean = false;
  //isLoggedIn = false;


  constructor(private observer: BreakpointObserver, private router: Router,
    private loginService: LoginService, 
    private confirmService: ConfirmDialogService, 
    private mensagemService: MensagemService, 
) {
  // this.loginService.loginStatusSubject.subscribe((status) => {
  //   this.isLoggedIn = status;
  // });
 }


  ngOnInit(): void {
    this.nomeUsuario = this.loginService.getNome();

    const userRole = this.loginService.getRole();

    if (userRole === 'ROLE_ADMN') {
      this.isAdmin = true;
    } else if (userRole === 'ROLE_USER') {
      this.isUser = true;
    } 

  } 

  logout() {
    const result$ = this.confirmService.abrir("Deseja se desconectar?")

    result$
      .asObservable()
      .pipe(
        take(1),
        switchMap((result) =>
          result ? of(this.loginService.deslogar()).pipe(map(() => null)) : EMPTY
          
        )
      )
      .subscribe({
        next: (value) => {
          this.router.navigateByUrl('/', { skipLocationChange: true });
        },

        error: (err) => {
          if (err.error.message) {
            this.mensagemService.add(err.error.message);
          } else {
            this.mensagemService.add('Erro de requisição.');
          }
        },
      });


  }


}
