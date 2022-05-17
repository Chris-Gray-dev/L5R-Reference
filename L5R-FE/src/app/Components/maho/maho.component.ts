import { Component, OnInit } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { MahoService } from 'src/app/Services/maho.service';
import { RingService } from 'src/app/Services/ring.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';

@Component({
  selector: 'app-maho',
  templateUrl: './maho.component.html',
  styleUrls: ['./maho.component.scss'],
})
export class MahoComponent implements OnInit {
  maho: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };

  constructor(
    private mahoService: MahoService,
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
    this.mahoService.getMaho().subscribe((maho) => {
      this.maho = maho;
      console.log('Got maho');
      console.log(this.maho);
    });
  }
}
