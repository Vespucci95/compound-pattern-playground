import { EventStrategy } from '../strategy/event-strategy';
import BeatModel from '../../../model/beat-model';

class StopStrategy implements EventStrategy {
  constructor(private model: BeatModel) {}

  event(): void {
    this.model.stop();
  }

  predicate(): boolean {
    return this.model.isPlaying();
  }

  errorMessage(): string {
    return '재생 중이 아닙니다.';
  }
}

export default StopStrategy;
