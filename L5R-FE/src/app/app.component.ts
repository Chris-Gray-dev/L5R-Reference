import { Component, Inject } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.matIconRegistry.addSvgIcon(
      `opportunity`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.baseHref + '../assets/opportunity.svg'
      )
    );
  }
  title = 'L5R Reference';
}
