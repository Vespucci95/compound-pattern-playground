import BeatModel, { BPMObserver } from './beat-model';
import { insertWith } from './utils/dom';
import { isElement } from './utils/core';

class BeatView implements BPMObserver {
  private model: BeatModel;
  private container: HTMLElement | null;

  constructor(containerId: string, model: BeatModel) {
    this.model = model;
    this.model.registerObserver(this);
    this.container = document.getElementById(containerId);
    this.render();
  }

  render() {
    const insertHTML = insertWith(this.container, 'insertAdjacentHTML');
    insertHTML('beforeend', `<p>BPM</p>`);
    insertHTML('beforeend', `<div id="bpm-display">Current BPM : ${this.model.getBPM()}</div>`);
    insertHTML(
      'beforeend',
      `<input id="bpm-input" value="${this.model.getBPM()}" min="${this.model.getBPMMin()}" max="${this.model.getBPMMax()}"/>`
    );
    insertHTML('beforeend', `<button id="bpm-set-button">Set</button>`);
    insertHTML(
      'beforeend',
      `<div><button id="bpm-decrease-button">-</button> <button id="bpm-increase-button">+</button></div>`
    );
    insertHTML(
      'beforeend',
      `<div><button id="bpm-stop-button">STOP</button> <button id="bpm-start-button">START</button></div>`
    );
  }

  updateBPM() {
    const bpmDisplay = document.getElementById('bpm-display');
    if (isElement(bpmDisplay)) {
      bpmDisplay.innerText = `Current BPM : ${this.model.getBPM()}`;
    }

    const bpmInput = document.getElementById('bpm-input') as HTMLInputElement;
    if (isElement(bpmInput)) {
      bpmInput.value = `${this.model.getBPM()}`;
    }
  }
}

export default BeatView;
