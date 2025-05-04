import { Component } from '@angular/core';

@Component({
  selector: 'app-local-menu',
  imports: [],
  templateUrl: './local-menu.component.html',
  styles: ``
})
export class LocalMenuComponent {
  scrollTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}
