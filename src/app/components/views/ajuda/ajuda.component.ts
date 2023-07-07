import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.css'],
})
export class AjudaComponent implements OnInit {
  

  constructor() { }

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

}
