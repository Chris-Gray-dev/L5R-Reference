import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';

@Component({
  selector: 'app-technique-card',
  templateUrl: './technique-card.component.html',
  styleUrls: ['./technique-card.component.scss'],
})
export class TechniqueCardComponent implements OnInit {
  @Input() technique: Technique;
  @Input() books: { [key: number]: string };
  @Input() techniqueTypes: { [key: number]: string };
  @Input() rings: { [key: number]: string };
  @Input() kataStyles: { [key: number]: string };

  @Output() starToggle: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  public gte(subj: undefined | number, num: number) {
    if (subj !== undefined) {
      return subj >= num;
    }
    return 0;
  }

  getKataStyle(style: number | undefined): string {
    let styleName = '';
    if (style !== undefined && this.kataStyles) {
      styleName = this.kataStyles[style];
    }
    return styleName;
  }

  getRing(ring: number | undefined): string {
    let ringName = '';
    if (ring !== undefined && this.rings) {
      ringName = this.rings[ring];
    }
    return ringName;
  }

  passEvent(data: string) {
    console.log('passing data', data);
    this.starToggle.emit(data);
  }

  getColour(techniqueType: number): string {
    let colour = 'red';
    let type = this.techniqueTypes[techniqueType];
    switch (type) {
      case 'Kata':
        colour = '#fe6a6a';
        break;
      case 'Kihō':
        colour = '#a6e8aa';
        break;
      case 'Invocation':
        colour = '#ba97ff';
        break;
      case 'Ritual':
        colour = '#ffd7fc';
        break;
      case 'Shūji':
        colour = '#f9ff91';
        break;
      case 'Mahō':
        colour = '#c3c2e2';
        break;
      case 'Ninjitsu':
        colour = '#b0cffe';
        break;
    }
    return colour;
  }
}
