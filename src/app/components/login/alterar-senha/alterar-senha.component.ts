import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  public alterarSenhaForm !: FormGroup

  formAlterarSenha?: FormGroup

  mensagem = ""


  formularioSubmetido = false
  formularioNaoSubmetido = false

  senhaComprimento = false
  senhaLetraMaiuscula = false
  senhaLetraMinuscula = false
  senhaNumero = false
  senhaSimbolo = false
  senhaErrada: boolean | null = null
  exibirLista = false
  nomeDoUsuario = ""

  constructor(
    private service: LoginService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.alterarSenhaForm = this.formBuilder.group({
      senhaAtual: ['',
        Validators.required
      ],
      novaSenha: ['', [
        Validators.required,
        this.senhaComprimentoValidator,
        this.senhaLetraMinusculaValidator,
        this.senhaLetraMaiusculaValidator,
        this.senhaNumeroValidator,
        this.senhaSimboloValidator,
      ]
      ],
      confirmacaoNovaSenha: ['', [
        Validators.required,
      ]]
    }, {
      validators: this.senhasDiferentesValidador,
    });

    this.nomeDoUsuario = this.service.getNome()
  }

  get senhaAtual() {
    return this.alterarSenhaForm?.get('senhaAtual')!
  }

  get novaSenha() {
    return this.alterarSenhaForm?.get('novaSenha')!
  }

  get confirmacaoNovaSenha() {
    return this.alterarSenhaForm?.get('confirmacaoNovaSenha')!
  }

  async alterarSenha() {
    if (this.alterarSenhaForm.invalid) {
      return
    }

    var senhaAtual = this.senhaAtual?.value
    var novaSenha = this.novaSenha?.value
    var confirmacaoNovaSenha = this.confirmacaoNovaSenha?.value

    this.service
      .alterarSenha(senhaAtual, novaSenha, confirmacaoNovaSenha)
      .subscribe(
        status => {
          this.mensagem = "Senha atualizada com sucesso!"
          this.formularioSubmetido = true
        },
        erro => {
          if ((erro.status === 401)) {
            this.formularioNaoSubmetido = true
            this.mensagem = 'Erro ao tentar salvar nova senha!'

          } else if ((erro.status === 400)) {
            this.formularioNaoSubmetido = true
            this.mensagem = 'Senha atual incorreta.'
          }
          else {
            this.formularioNaoSubmetido = true
            this.mensagem = 'Erro inesperado ao tentar salvar nova senha!'
          }
        }
      )
  }

  senhasDiferentesValidador: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    var senha = this.novaSenha?.value;
    var confirmacao = this.confirmacaoNovaSenha?.value;

    if (!senha || !confirmacao)
      return null;

    this.senhaErrada = senha !== confirmacao

    return this.senhaErrada ? { senhaDiferente: { value: senha } } : null
  }

  senhaComprimentoValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''

    if (value.length >= 10 && value.length <= 20) {
      this.senhaComprimento = true
      return null
    } else {
      this.senhaComprimento = false
      return { comprimentoSenha: true }
    }
  }

  senhaLetraMinusculaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''
    if (/[a-z]/.test(value)) {
      this.senhaLetraMinuscula = true
      return null
    } else {
      this.senhaLetraMinuscula = false
      return { letraMinusculaSenha: true }
    }
  }

  senhaLetraMaiusculaValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''

    if (/[A-Z]/.test(value)) {
      this.senhaLetraMaiuscula = true
      return null
    } else {
      this.senhaLetraMaiuscula = false
      return { letraMaiusculaSenha: true }

    }
  }

  senhaNumeroValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''
    if (/[0-9]/.test(value)) {
      this.senhaNumero = true
      return null
    } else {
      this.senhaNumero = false
      return { numeroSenha: true }
    }
  }

  senhaSimboloValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value || ''
    if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value)) {
      this.senhaSimbolo = true
      return null
    } else {
      this.senhaSimbolo = false
      return { simboloSenha: true }
    }
  }

  onConfirmacaoInput() {
    this.confirmacaoNovaSenha.updateValueAndValidity();
  }


}
