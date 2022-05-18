import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StarService {
  private trueString: string = true.toString();
  constructor() {}

  GetStarStatus(id: string): boolean {
    var value = localStorage.getItem(id);
    if (value) {
      return value === this.trueString;
    } else {
      return false;
    }
  }

  SetStarStaus(id: string, value: boolean): void {
    localStorage.setItem(id, value.toString());
  }
}
