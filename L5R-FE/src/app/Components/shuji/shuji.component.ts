import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { ShujiService } from 'src/app/Services/shuji.service';
import { RingService } from 'src/app/Services/ring.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';

@Component({
  selector: 'app-shuji',
  templateUrl: './shuji.component.html',
  styleUrls: ['./shuji.component.scss'],
})
export class ShujiComponent implements OnInit {
  shuji: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };

  constructor(
    private shujiService: ShujiService,
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
    this.shujiService.getShuji().subscribe((shuji) => {
      this.shuji = shuji;
      console.log('Got shuji');
      console.log(this.shuji);
    });
  }
}
