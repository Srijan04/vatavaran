import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  updateCounter(count: number) {
    this.counterSubject.next(count);
  }
}

