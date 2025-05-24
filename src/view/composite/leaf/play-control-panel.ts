import Container from '../composite/container';

class PlayControlPanel extends Container {
  render(): string {
    return `
      <div class="play-control-panel">
        ${super.render()}
      </div>
    `;
  }
}

export default PlayControlPanel;