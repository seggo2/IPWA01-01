import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LocalMenuComponent } from "./components/local-menu/local-menu.component";
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LocalMenuComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'co2-rechner';
  direction: 'ltr' | 'rtl' = document.documentElement.dir as 'ltr' | 'rtl' || 'ltr';
  showSidebar = true;
  showHeader = true

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.showSidebar = !['/', '/impressum', '/datenschutz'].includes(event.urlAfterRedirects);
        this.showHeader = event.urlAfterRedirects !== '/';
      }
    });
  }
}
