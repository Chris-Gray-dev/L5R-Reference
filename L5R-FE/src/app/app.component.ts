import { Component, Inject, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { TechniqueService } from './Services/technique.service';
import { environment } from 'src/environments/environment';
import { RingService } from './Services/ring.service';
import { BookService } from './Services/book.service';
import { KataStyleService } from './Services/kata-style.service';
import { TechniqueTypeService } from './Services/technique-type.service';
import { MatTabsModule } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavLink } from './Models/navlink.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  rings: { [key: number]: string };
  books: { [key: number]: string };
  kataStyles: { [key: number]: string };
  techTypes: { [key: number]: string };

  navLinks: any[]; // Figure out how to make it of type NavLink
  activeLinkIndex = -1;

  constructor(
    private ringService: RingService,
    private techTypeService: TechniqueTypeService,
    private kataStyleService: KataStyleService,
    private bookService: BookService,
    private techService: TechniqueService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router,
    @Inject(APP_BASE_HREF) private baseHref: string
  ) {
    this.navLinks = [
      {
        label: 'Kata',
        link: './kata',
        index: 0,
      },
      {
        label: 'Kihō',
        link: './kiho',
        index: 1,
      },
      {
        label: 'Invocations',
        link: './invocations',
        index: 2,
      },
      {
        label: 'Rituals',
        link: './rituals',
        index: 3,
      },
      {
        label: 'Shūji',
        link: './shuji',
        index: 4,
      },
      {
        label: 'Mahō',
        link: './maho',
        index: 5,
      },
      {
        label: 'Ninjitsu',
        link: './ninjitsu',
        index: 6,
      },
      {
        label: 'Conditions',
        link: './conditions',
        index: 7,
      },
      {
        label: 'Starred',
        link: './starred',
        index: 99,
      },
    ];
    console.log(environment.apiURL);
    this.matIconRegistry.addSvgIcon(
      `opportunity`,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        this.baseHref + '../assets/opportunity.svg'
      )
    );
  }

  title = 'L5R Reference';

  ngOnInit(): void {
    this.ringService.getRings().subscribe((resp) => (this.rings = resp));
    this.bookService.getBooks().subscribe((resp) => (this.books = resp));
    this.kataStyleService
      .getKataStyles()
      .subscribe((resp) => (this.kataStyles = resp));
    this.techTypeService
      .getTechniqueTypes()
      .subscribe((resp) => (this.techTypes = resp));

    this.techService.getTechniques().subscribe((b) => {
      let stuff = b;
      console.log('dasjdlksaj');
      console.log(stuff);
    });

    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
