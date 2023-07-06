import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  isIframe = false;
  location!: string

  constructor(private route: Router) {
    route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.location = val.url
      }
    })
  }


  ngOnInit(): void {
    this.isIframe = window !== window.parent && !window.opener;
  }

  
}
