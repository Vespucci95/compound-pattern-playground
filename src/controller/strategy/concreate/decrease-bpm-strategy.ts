import { EventStrategy } from '../strategy/event-strategy';
import BeatModel from '../../../model/beat-model';

class DecreaseBpmStrategy implements EventStrategy {
  constructor(private model: BeatModel) {}

  event(): void {
    this.model.decreaseBPM();
  }

  predicate(): boolean {
    return this.model.getBPM() > this.model.getBPMMin();
  }

  errorMessage(): string {
    return `BPM은 ${this.model.getBPMMin()}보다 커야 합니다.`;
  }
}

export default DecreaseBpmStrategy;
