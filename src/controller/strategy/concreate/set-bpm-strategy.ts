import { EventStrategy } from '../strategy/event-strategy';
import BeatModel from '../../../model/beat-model';

class SetBpmStrategy implements EventStrategy {
  constructor(
    private model: BeatModel,
    private getValue: () => number
  ) {}

  event(): void {
    this.model.setBPM(this.getValue());
  }

  predicate(): boolean {
    return Number.isInteger(this.getValue()) && this.getValue() >= this.model.getBPMMin() && this.getValue() <= this.model.getBPMMax();
  }

  errorMessage(): string {
    return `BPM은 ${this.model.getBPMMin()}-${this.model.getBPMMax()} 범위여야 합니다.`;
  }
}

export default SetBpmStrategy;
