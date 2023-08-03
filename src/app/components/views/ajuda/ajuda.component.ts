import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, catchError, map, switchMap, take, tap } from 'rxjs';
import { Email } from 'src/app/models/email';
import { ConfirmDialogService } from 'src/app/services/confirm-dialog.service';
import { EmailService } from 'src/app/services/email.service';
import { MensagemService } from 'src/app/services/mensagem.service';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css'],
})
export class AjudaComponent implements OnInit {
  email: Email = {
    emailFrom: '',
    emailTo: 'ma_eduard@hotmail.com',
    subject: '',
    text: ''
  };
  

  constructor(private emailService: EmailService,
    private router: Router,
    private mensagemService: MensagemService,
    private confirmService: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Seu código JavaScript aqui
    const faqs = document.querySelectorAll('.faq');
    faqs.forEach(faq => {
      faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // Troca do ícone
        const icon = faq.querySelector('.faq_icon i');
        if (icon!.className === 'fa-solid fa-plus') {
          icon!.className = 'fa-solid fa-plus';
        } else {
          icon!.className = 'fa-solid fa-plus';
        }
      });
    });
  }

  enviarEmail() {
  
    const result$ = this.confirmService.abrir("Deseja enviar esta pergunta?");
  result$
    .asObservable()
    .pipe(
      take(1),
      switchMap((result) => {
        if (result) {
          return this.emailService.sendEmail(this.email).pipe(
            tap((response) => {
              console.log('Email enviado com sucesso:', response);
              this.mensagemService.add('Pergunta enviada com sucesso!');
              // Redefine o formulário após o envio bem-sucedido do e-mail, se necessário
              this.email = {
                emailFrom: '',
                emailTo: 'ma_eduard@hotmail.com',
                subject: '',
                text: ''
              };
            }),
            catchError((error) => {
              console.error('Erro ao enviar email:', error);
              return EMPTY;
            })
          );
        } else {
          return EMPTY;
        }
      })
    )
    .subscribe({
      next: (value) => {
        this.mensagemService.add('Pergunta enviada com sucesso!');
        // Alguma lógica adicional que precisa ser executada após o envio do email (se necessário)
      },
      error: (err) => {
        // Lógica para lidar com erros (se necessário)
      },
    });

  }

}
