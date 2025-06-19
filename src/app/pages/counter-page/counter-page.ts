import {
  Component,
  computed,
  signal,
  effect,
  inject,
  Injector,
  EffectRef,
} from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css',
})
export class CounterPage {
  // INCREMENT COUNTER
  counter = signal<number>(0);
  isPrime = computed<boolean>(() => isPrime(this.counter()));
  increment() {
    this.counter.update((value) => value + 1);
  }
  duplicate() {
    this.counter.update((value) => value * 2);
  }
  decrement() {
    this.counter.update((value) => value - 1);
  }
  reset() {
    this.counter.set(0);
  }

  private injector = inject(Injector);
  private counterEffect?: EffectRef;

  startLoggingEffect(): void {
    console.log('Starting Log');
    if (!this.counterEffect) {
      this.counterEffect = effect(
        () => console.log(`Counter value is ${this.counter()}`),
        { manualCleanup: true, injector: this.injector }
      );
    }
  }

  stopLoggingEffect(): void {
    console.log('Stopping Log');
    this.counterEffect?.destroy();
    this.counterEffect = undefined;
  }
}

function isPrime(num: number): boolean {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}
