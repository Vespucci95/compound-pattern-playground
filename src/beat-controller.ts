import BeatModel from './beat-model';

class BeatController {
  private _model: BeatModel;

  constructor(model: BeatModel) {
    this._model = model;
    this.eventListener();
  }

  eventListener() {
    document.getElementById('bpm-decrease-button')?.addEventListener('click', () => {
      this._model.decreaseBPM();
    });

    document.getElementById('bpm-increase-button')?.addEventListener('click', () => {
      this._model.increaseBPM();
    });

    document.getElementById('bpm-set-button')?.addEventListener('click', () => {
      const input = document.getElementById('bpm-input') as HTMLInputElement;
      const value = Number(input.value);
      this._model.setBPM(value);
    });

    document.getElementById('bpm-start-button')?.addEventListener('click', () => {
      this._model.play();
    });
    document.getElementById('bpm-stop-button')?.addEventListener('click', () => {
      this._model.stop();
    });
  }
}

export default BeatController;
