import Container from '../composite/container';

class BPMControlPanel extends Container {
  render(): string {
    return `
      <div class="bpm-control-panel">
        ${super.render()}
      </div>
    `;
  }
}

export default BPMControlPanel;
