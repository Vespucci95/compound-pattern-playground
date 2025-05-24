import audioSource from 'url:../assets/clap.wav';

export interface BPMObserver {
  updateBPM(): void;
}

interface BeatModelInterface {
  setBPM(bpm: number): void;

  getBPM(): number;

  getBPMMin(): number;

  getBPMMax(): number;

  play(): void;

  stop(): void;

  increaseBPM(): void;

  decreaseBPM(): void;
  
  isPlaying(): boolean;

  registerObserver(observer: BPMObserver): void;

  removeObserver(observer: BPMObserver): void;

  notifyBPMObservers(): void;
}

class BeatModel implements BeatModelInterface {
  private _audio: HTMLAudioElement;
  private _bpm: number = 90;
  private _bpmMin: number = 90;
  private _bpmMax: number = 300;
  private _intervalId: number | null = null;
  private _bpmObservers: BPMObserver[] = [];

  constructor() {
    this._audio = new Audio(audioSource);
    this._audio.volume = 0.5;
    this._audio.preload = 'auto';
  }

  setBPM(bpm: number) {
    this._bpm = bpm;
    this.notifyBPMObservers();
  }

  getBPM(): number {
    return this._bpm;
  }

  getBPMMin(): number {
    return this._bpmMin;
  }

  getBPMMax(): number {
    return this._bpmMax;
  }

  play() {
    if (this._intervalId) {
      clearInterval(this._intervalId);
    }
    this._intervalId = setInterval(() => this._audio.play(), 60_000 / this._bpm);
  }

  stop() {
    this._audio.pause();
    if (this._intervalId !== null) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }

  increaseBPM() {
    this.setBPM(this.getBPM() + 1);
  }

  decreaseBPM() {
    this.setBPM(this.getBPM() - 1);
  }

  isPlaying(): boolean {
    return this._intervalId !== null;
  }

  registerObserver(observer: BPMObserver): void {
    this._bpmObservers.push(observer);
  }

  removeObserver(observer: BPMObserver): void {
    this._bpmObservers = this._bpmObservers.filter(o => o !== observer);
  }

  notifyBPMObservers(): void {
    this._bpmObservers.forEach(observer => observer.updateBPM());
  }
}

export default BeatModel;
