import BeatModel, { BPMObserver } from '../model/beat-model';
import { insertWith } from '../utils/dom';
import Container from './composite/composite/container';
import BPMDisplay from './composite/leaf/bpm-display';
import BPMInput from './composite/leaf/bpm-input';
import BPMControlPanel from './composite/leaf/bpm-control-panel';
import PlayControlPanel from './composite/leaf/play-control-panel';
import Button from './composite/leaf/button';

class BeatView extends Container implements BPMObserver {
  private model: BeatModel;
  private container: HTMLElement | null;

  private bpmDisplay: BPMDisplay;
  private bpmControlPanel: BPMControlPanel;
  private playControlPanel: PlayControlPanel;

  constructor(containerId: string, model: BeatModel) {
    super();
    this.model = model;
    this.model.registerObserver(this);

    this.bpmDisplay = new BPMDisplay();
    this.add(this.bpmDisplay);

    this.bpmControlPanel = new BPMControlPanel();
    this.bpmControlPanel.add(new BPMInput());
    this.bpmControlPanel.add(new Button('bpm-set-button', 'Set'));
    this.bpmControlPanel.add(new Button('bpm-decrease-button', '-1'));
    this.bpmControlPanel.add(new Button('bpm-increase-button', '+1'));
    this.add(this.bpmControlPanel);

    this.playControlPanel = new PlayControlPanel();
    this.playControlPanel.add(new Button('bpm-stop-button', 'STOP'));
    this.playControlPanel.add(new Button('bpm-start-button', 'START'));
    this.add(this.playControlPanel);

    this.container = document.getElementById(containerId);
    const inertHTML = insertWith(this.container, 'insertAdjacentHTML');
    inertHTML('beforeend', this.render());
  }

  updateBPM() {
    const data = {
      bpm: this.model.getBPM(),
      min: this.model.getBPMMin(),
      max: this.model.getBPMMax(),
    };
    this.update(data);
  }

  getBPMInputValue(): number {
    const input = document.getElementById('bpm-input') as HTMLInputElement;
    return Number(input.value);
  }
}

export default BeatView;
