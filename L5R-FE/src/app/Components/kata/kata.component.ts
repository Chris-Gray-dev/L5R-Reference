import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { KataStyleService } from 'src/app/Services/kata-style.service';
import { KataService } from 'src/app/Services/kata.service';
import { RingService } from 'src/app/Services/ring.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';

@Component({
  selector: 'app-kata',
  templateUrl: './kata.component.html',
  styleUrls: ['./kata.component.scss'],
})
export class KataComponent implements OnInit {
  kata: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };
  kataStyles: { [key: number]: string };

  constructor(
    private kataService: KataService,
    private bookService: BookService,
    private techniqueTypeService: TechniqueTypeService,
    private ringService: RingService,
    private kataStyleService: KataStyleService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((resp) => (this.books = resp));
    this.ringService.getRings().subscribe((resp) => (this.rings = resp));
    this.techniqueTypeService
      .getTechniqueTypes()
      .subscribe((resp) => (this.techniqueTypes = resp));

    this.kataStyleService
      .getKataStyles()
      .subscribe((resp) => (this.kataStyles = resp));
    this.kataService.getKata().subscribe((kata) => {
      this.kata = kata;
      console.log('Got Ninjutsu');
      console.log(this.kata);
    });
  }
}
