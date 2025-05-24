import Component from '../component/component';

class Container extends Component {
  protected children: Component[] = [];

  add(component: Component): void {
    this.children.push(component);
  }

  remove(component: Component): void {
    this.children = this.children.filter(child => child !== component)
  }

  render(): string {
    return this.children.map(child => child.render()).join('');
  }

  update(data: any): void {
    this.children.forEach(child => child.update(data));
  }
}

export default Container;