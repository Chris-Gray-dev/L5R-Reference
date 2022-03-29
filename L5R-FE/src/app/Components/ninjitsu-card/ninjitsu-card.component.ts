import { Component, OnInit, Input } from '@angular/core';
import { Technique } from 'src/app/Models/technique.model';

@Component({
  selector: 'app-ninjitsu-card',
  templateUrl: './ninjitsu-card.component.html',
  styleUrls: ['./ninjitsu-card.component.scss'],
})
export class NinjitsuCardComponent implements OnInit {
  @Input() technique: Technique;
  @Input() books: { [key: number]: string };
  @Input() techniqueTypes: { [key: number]: string };

  constructor() {}

  ngOnInit(): void {}
}
