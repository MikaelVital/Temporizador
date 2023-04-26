import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css'],
  imports: [CommonModule, FormsModule],
})
export class TimerComponent implements OnInit {
  cycles = 1;
  count = 0;
  restTime = 10;
  isWorking = true; // indica se está em tempo de atividade ou descanso
  timer: any;
  isPaused = false;

  ngOnInit(): void {}

  start() {
    this.isPaused = false;
    this.timer = setInterval(() => {
      if (this.isPaused) return;

      this.count++;

      if (this.count > 10) {
        this.count = 0;
        this.cycles--;
        this.isWorking = !this.isWorking; // alternar entre tempo de atividade e descanso
      }

      if (this.cycles === 0) {
        clearInterval(this.timer);
        this.count = 0;
        this.isWorking = true;
      }
    }, 1000);
  }

  pause() {
    this.isPaused = true;
  }

  stop() {
    clearInterval(this.timer);
    this.count = 0;
    this.cycles = 1;
    this.isWorking = true;
  }
}
