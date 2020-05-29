import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  menuIndex = new BehaviorSubject<any>(1);

  setIndex(value) {

    this.menuIndex.next(value);
  }

  getIndex() {
    return this.menuIndex.asObservable();
  }


  constructor() {
  }
}
