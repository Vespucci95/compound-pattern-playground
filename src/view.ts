import clapAudioUrl from 'url:./assets/clap.wav';

export class View {
  private audio: HTMLAudioElement;
  private viewContainer: HTMLElement;

  constructor(containerId: string) {
    this.audio = new Audio(clapAudioUrl);
    this.viewContainer = document.getElementById(containerId) as HTMLElement;
    this.paint(containerId);
  }

  play() {
    this.audio.play().catch(e => console.log(e));
  }

  paint(containerId: string) {
    this.viewContainer.insertAdjacentHTML(
      'beforeend',
      `
      <button id="btn-aa">button</button>
      `
    );

    document.getElementById('btn-aa')?.addEventListener('click', v => {
      this.audio.play();
    });
  }
}
