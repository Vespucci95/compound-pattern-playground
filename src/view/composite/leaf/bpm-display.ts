import Component from '../component/component';

class BPMDisplay extends Component {
  private bpm: number = 90;

  render(): string {
    return `<div id="bpm-display">Current BPM: ${this.bpm}</div>`;
  }

  update(data: { bpm: number }): void {
    this.bpm = data.bpm;
    const element = document.getElementById('bpm-display');
    if (element) {
      element.textContent = `Current BPM: ${this.bpm}`;
    }
  }
}
export default BPMDisplay