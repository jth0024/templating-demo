import { createComponent, createElement } from '../../utilities';
import { about } from '../about/about';
import { topbar } from '../topbar/topbar';

export const app = createComponent({
  afterRender() {
    console.log('after app render');
  },
  beforeRender() {
    console.log('before app render');
  },
  render() {
    return createElement('div', { class: 'app' },
      createElement(topbar),
      createElement('div', null,
        createElement(about, { post: 1 })
      )
    );
  },
});
