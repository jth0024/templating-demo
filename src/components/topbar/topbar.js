import { createComponent, createElement } from '../../helpers/DOM';

export const topbar = createComponent({
  afterRender() {
    console.log('after topbar render');
  },
  beforeRender() {
    console.log('before topbar render');
  },
  render() {
    return createElement('div', { class: 'topbar' },
      createElement('a', { href: './#/home' }, 'Home'),
      createElement('a', { href: './#/about' }, 'About'),
      createElement('a', { href: './#/posts/1' }, 'Posts')
    );
  },
});
