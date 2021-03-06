import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { NinjitsuService } from 'src/app/Services/ninjitsu.service';
import { RingService } from 'src/app/Services/ring.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';

@Component({
  selector: 'app-ninjitsu',
  templateUrl: './ninjitsu.component.html',
  styleUrls: ['./ninjitsu.component.scss'],
})
export class NinjitsuComponent implements OnInit {
  ninjitsu: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };

  constructor(
    private ninjitsuService: NinjitsuService,
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
    this.ninjitsuService.getNinjitsu().subscribe((ninj) => {
      this.ninjitsu = ninj;
      console.log('Got Ninjutsu');
      console.log(this.ninjitsu);
    });
  }
}
