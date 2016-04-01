import { createComponent, createElement } from '../../helpers/DOM';
import { posts } from '../posts/posts';
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
        createElement(posts, { post: 1 })
      )
    );
  },
});
