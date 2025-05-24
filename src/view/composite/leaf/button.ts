import Component from '../component/component';

class Button extends Component {
  constructor(
    private id: string,
    private text: string,
    private enabled: boolean = true
  ) {
    super();
  }

  render(): string {
    const disabledAttr = this.enabled ? '' : 'disabled';
    return `<button id="${this.id}" ${disabledAttr}>${this.text}</button>`;
  }

  update(data: { enabled?: boolean; text?: string }): void {
    if (data?.enabled !== undefined) this.enabled = data.enabled;
    if (data?.text !== undefined) this.text = data.text;

    const element = document.getElementById(this.id) as HTMLButtonElement;
    if (element) {
      element.disabled = !this.enabled;
      element.textContent = this.text;
    }
  }
}

export default Button;
