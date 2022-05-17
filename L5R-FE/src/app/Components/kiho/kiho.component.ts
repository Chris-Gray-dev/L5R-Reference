import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { KihoService } from 'src/app/Services/kiho.service';
import { RingService } from 'src/app/Services/ring.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';

@Component({
  selector: 'app-kiho',
  templateUrl: './kiho.component.html',
  styleUrls: ['./kiho.component.scss'],
})
export class KihoComponent implements OnInit {
  kiho: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };

  constructor(
    private kihoService: KihoService,
    private bookService: BookService,
    private techniqueTypeService: TechniqueTypeService,
    private ringService: RingService
  ) {}

  ngOnInit(): void {
    this.bookService.getBooks().subscribe((resp) => (this.books = resp));
    this.ringService.getRings().subscribe((resp) => (this.rings = resp));
    this.techniqueTypeService
      .getTechniqueTypes()
      .subscribe((resp) => (this.techniqueTypes = resp));
    this.kihoService.getKiho().subscribe((kiho) => {
      this.kiho = kiho;
      console.log('Got kiho');
      console.log(this.kiho);
    });
  }
}
