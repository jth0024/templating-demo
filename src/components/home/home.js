import $ from 'jquery';
import { createComponent, createElement } from '../../helpers/DOM';

export const home = createComponent({
  afterRender,
  render() {
    return createElement('div', { class: 'home' },
      'Welcome to home. Go to ',
      createElement('a', { href: './#/about' }, 'about'),
      '?'
    );
  },
});

function afterRender() {
  const homeElement = $('.home');
  console.log('home:', homeElement);
}
