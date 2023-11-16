import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { CounterService } from '../core/services/counter.service';
interface Counter {
  id: number;
  count: number;
}
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  counters: Counter[] = [];
  counterId = 1;
  @Output() counterChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor(private counterService: CounterService) {}
  ngOnInit() {
    this.updateCounterInNavbar();
   }

  addCounter() {
    this.counters.push({ id: this.counterId++, count: 0 });
    this.updateCounterInNavbar();
  }

  resetCounters() {
    this.counters = [];
    this.updateCounterInNavbar();
  }

  incrementCounter(counter: Counter) {
    counter.count++;
  }

  decrementCounter(counter: Counter) {
    if (counter.count > 0) {
      counter.count--;
    }
  }

  deleteCounter(index: number) {
    this.counters.splice(index, 1);
    this.updateCounterInNavbar();
  }

  private updateCounterInNavbar() {
    const totalCount = this.counters.length
    this.counterService.updateCounter(totalCount);
  }

}
