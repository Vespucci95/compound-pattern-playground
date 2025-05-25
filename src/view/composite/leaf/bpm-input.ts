import Component from '../component/component';

class BPMInput extends Component {
  private bpm: number = 90;
  private min: number = 60;
  private max: number = 300;

  render(): string {
    return `<input id="bpm-input" type="number" value="${this.bpm}" min="${this.min}" max="${this.max}" />`;
  }

  update(data: { bpm: number; min: number; max: number }): void {
    this.bpm = data.bpm;
    this.min = data.min;
    this.max = data.max;

    const element = document.getElementById('bpm-input') as HTMLInputElement;
    if (element) {
      element.value = this.bpm.toString();
      element.min = this.min.toString();
      element.max = this.max.toString();
    }
  }
}

export default BPMInput;
