import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScrollService {
  private selection = new Subject();
  currentSelection = this.selection.asObservable();

  constructor() {}

  selectionChange(selection: string) {
    this.selection.next(selection);
  }
}
