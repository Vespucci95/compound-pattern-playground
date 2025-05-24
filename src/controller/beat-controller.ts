import BeatModel from '../model/beat-model';
import { EventStrategy } from './strategy/strategy/event-strategy';
import StartStrategy from './strategy/concreate/start-strategy';
import DecreaseBpmStrategy from './strategy/concreate/decrease-bpm-strategy';
import IncreaseBpmStrategy from './strategy/concreate/increase-bpm-strategy';
import StopStrategy from './strategy/concreate/stop-strategy';
import SetBpmStrategy from './strategy/concreate/set-bpm-strategy';

class BeatController {
  private strategies: Map<string, EventStrategy> = new Map();

  constructor(model: BeatModel) {
    this.setStrategy('decrease', new DecreaseBpmStrategy(model));
    this.setStrategy('increase', new IncreaseBpmStrategy(model));
    this.setStrategy('stop', new StopStrategy(model));
    this.setStrategy('start', new StartStrategy(model));
    this.setStrategy(
      'set',
      new SetBpmStrategy(
        model,
        () => {
          const input = document.getElementById('bpm-input') as HTMLInputElement;
          return Number(input.value);
        }
      )
    );
    this.eventListener();
  }

  executeEvent(strategyName: string): void {
    const strategy = this.strategies.get(strategyName);
    if (!strategy) return;

    if (strategy.predicate()) {
      strategy.event();
    } else {
      console.error(strategy.errorMessage());
    }
  }

  private setStrategy(name: string, strategy: EventStrategy) {
    this.strategies.set(name, strategy);
  }

  eventListener() {
    document.getElementById('bpm-decrease-button')?.addEventListener('click', () => {
      this.executeEvent('decrease');
    });

    document.getElementById('bpm-increase-button')?.addEventListener('click', () => {
      this.executeEvent('increase');
    });

    document.getElementById('bpm-set-button')?.addEventListener('click', () => {
      this.executeEvent('set');
    });

    document.getElementById('bpm-start-button')?.addEventListener('click', () => {
      this.executeEvent('start');
    });
    document.getElementById('bpm-stop-button')?.addEventListener('click', () => {
      this.executeEvent('stop');
    });
  }
}

export default BeatController;
