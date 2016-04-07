import { createComponent, createElement } from '../../utilities';

export const about = createComponent({
  afterRender() {
    console.log('About page rendered');
  },
  render() {
    return createElement('div', { class: 'about' },
      'Welcome to About! Want to view',
      createElement('a', { href: './#/posts/1' }, ' posts'),
      '?'
    );
  },
});
