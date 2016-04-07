import { createComponent, createElement } from '../../utilities';

export const posts = createComponent({
  beforeRender() {
    console.log('before posts render');
  },
  afterRender() {
    console.log('after posts render');
  },
  render() {
    return createElement('div', { class: 'posts' },
      createElement('span', null, `Post Id: ${ this.props.post }`)
    );
  },
});
