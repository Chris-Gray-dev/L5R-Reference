import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StarService } from 'src/app/Services/star.service';

@Component({
  selector: 'app-star-btn',
  templateUrl: './star-btn.component.html',
  styleUrls: ['./star-btn.component.scss'],
})
export class StarBtnComponent implements OnInit {
  @Input() techniqueID: string;
  @Output() starToggle: EventEmitter<string> = new EventEmitter();
  selected: boolean = false;

  constructor(private starService: StarService) {}

  ngOnInit(): void {
    this.selected = this.starService.GetStarStatus(this.techniqueID);
  }

  toggle(): void {
    this.starService.SetStarStaus(this.techniqueID, !this.selected);
    this.selected = this.starService.GetStarStatus(this.techniqueID);
    if (!this.selected) {
      this.starToggle.emit(this.techniqueID);
    }
  }
}
