import { Component, OnInit, OnChanges } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';
import { BookService } from 'src/app/Services/book.service';
import { RingService } from 'src/app/Services/ring.service';
import { StarService } from 'src/app/Services/star.service';
import { TechniqueTypeService } from 'src/app/Services/technique-type.service';
import { TechniqueService } from 'src/app/Services/technique.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.scss'],
})
export class StarredComponent implements OnInit {
  techniques: Technique[];
  rings: { [key: number]: string };
  books: { [key: number]: string };
  techniqueTypes: { [key: number]: string };

  constructor(
    private techniqueService: TechniqueService,
    private bookService: BookService,
    private techniqueTypeService: TechniqueTypeService,
    private ringService: RingService,
    private starService: StarService
  ) {
    this.bookService.getBooks().subscribe((resp) => (this.books = resp));
    this.ringService.getRings().subscribe((resp) => (this.rings = resp));
    this.techniqueTypeService
      .getTechniqueTypes()
      .subscribe((resp) => (this.techniqueTypes = resp));
  }

  ngOnInit(): void {
    this.techniqueService.getTechniques().subscribe((techniques) => {
      this.techniques = techniques;
      this.techniques = this.techniques.filter((technique) =>
        this.starService.GetStarStatus(technique.id)
      );
    });
  }

  UpdateList(data: string): void {
    this.techniques = this.techniques.filter((t) => t.id != data);
  }
}
