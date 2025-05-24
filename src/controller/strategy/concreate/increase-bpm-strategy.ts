import { EventStrategy } from '../strategy/event-strategy';
import BeatModel from '../../../model/beat-model';

class IncreaseBpmStrategy implements EventStrategy {
  constructor(private model: BeatModel) {}

  event(): void {
    this.model.increaseBPM();
  }

  predicate(): boolean {
    return this.model.getBPM() < this.model.getBPMMax();
  }

  errorMessage(): string {
    return `BPM은 ${this.model.getBPMMax()}보다 작아야 합니다.`;
  }
}

export default IncreaseBpmStrategy;