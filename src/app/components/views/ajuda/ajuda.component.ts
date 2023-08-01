import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs';
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
    emailTo: '',
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
          icon!.className = 'fa-solid fa-minus';
        } else {
          icon!.className = 'fa-solid fa-plus';
        }
      });
    });
  }

  enviarEmail() {
    const result$ = this.confirmService.abrir("Deseja enviar esta pergunta?")
    result$.asObservable()
      .pipe(
        take(1),
      ).subscribe({
        next: (value) => {
          this.emailService.sendEmail(this.email).subscribe(
            (response) => {
              console.log('Email sent successfully:', response);
              this.mensagemService.add('Pergunta enviada com sucesso!')
              // Redefine o formulário após o envio bem-sucedido do e-mail, se necessário
              this.email = {
                emailFrom: '',
                emailTo: '',
                subject: '',
                text: ''
              };
            },
            (error) => {
              console.error('Error sending email:', error);
            }
          );
          
          }
        },
      )
  }

}
