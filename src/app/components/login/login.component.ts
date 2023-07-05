import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthGuard } from 'src/app/services/auth.guard';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup;

  mensagem = ""
  respostaValidacaoErro = false
  login = ''

  constructor(private formBuilder: FormBuilder, private router: Router, public loginService: LoginService,
    private auth: AuthGuard) { };


  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      login: ['', [
        Validators.required, 
        Validators.minLength(4), 
        Validators.maxLength(30), 
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      senha: ['', [
        Validators.required,
      ]],
    });

  }

  logar() {
    var dadosLogin = this.loginForm.getRawValue() as Usuario;
    this.loginService.loginUsuario(dadosLogin)
      .subscribe(
        token => {
          var nossoToken = token?.token;
          if (this.loginService.validacaoToken(nossoToken)) {
            sessionStorage.setItem('token', nossoToken);
            location.href = "/home"
          } else {
            this.respostaValidacaoErro = true;
            this.mensagem = 'Ocorreu um erro. Por favor, tente novamente mais tarde.';
          }
        },

        erro => {
          console.log(erro)
          if ((erro.status === 403 || erro.status === 401)) {
            this.respostaValidacaoErro = true;
            this.mensagem = 'Usuário ou senha incorretos. Por favor, verifique suas credenciais e tente novamente.';
          } else if (erro.status === 423){
            this.respostaValidacaoErro = true;
            this.mensagem = 'Sua conta está bloqueada. Recupere sua senha e tente novamente.';
          } else {
            this.respostaValidacaoErro = true;
            this.mensagem = 'Ocorreu um erro. Por favor, tente novamente mais tarde.';
          }

        }
      )
    this.loginForm.reset();
  }

  limparMensagemDeErro() {
    this.respostaValidacaoErro = false;
  }


}
