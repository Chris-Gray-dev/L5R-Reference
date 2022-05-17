import { Component, OnInit, Input } from '@angular/core';
import { Opportunity } from 'src/app/Models/opportunity.model';

@Component({
  selector: 'app-new-opportunities',
  templateUrl: './new-opportunities.component.html',
  styleUrls: ['./new-opportunities.component.scss'],
})
export class NewOpportunitiesComponent implements OnInit {
  constructor() {}
  @Input() opportunities: Opportunity[];
  @Input() colour: string;
  @Input() rings: { [key: number]: string };

  ngOnInit(): void {
    console.log(this.colour);
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  getRing(ring: number | undefined): string {
    let ringName = '';
    if (ring !== undefined && this.rings) {
      ringName = this.rings[ring];
    }
    return ringName;
  }
}
