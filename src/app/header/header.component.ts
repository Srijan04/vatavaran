import { Component, OnInit } from '@angular/core';
import { CounterService } from '../core/services/counter.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  counter: number = 0;
  constructor(
    private counterService: CounterService
  ) { }

  ngOnInit() {
    this.counterService.counter$.subscribe(count => {
      this.counter = count;
    });
  }

}
