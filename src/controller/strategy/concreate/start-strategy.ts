import { EventStrategy } from '../strategy/event-strategy';
import BeatModel from '../../../model/beat-model';

class StartStrategy implements EventStrategy {
  constructor(private model: BeatModel) {}

  event(): void {
    this.model.play();
  }

  predicate(): boolean {
    return !this.model.isPlaying();
  }

  errorMessage(): string {
    return '이미 재생 중입니다.';
  }
}

export default StartStrategy;
