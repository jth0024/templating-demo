import { createComponent } from '../../helpers/component';
import { posts } from '../posts/posts';
import { topbar } from '../topbar/topbar';

export const app = createComponent({
  afterRender() {
    console.log('after app render');
  },
  beforeRender() {
    console.log('before app render');
  },
  childComponents: [
    posts,
    topbar,
  ],
  name: 'app',
  template: `
    <topbar data-test="testValue"></topbar>
    <div id="view"></div>
    <posts data-post="1"></posts>
  `,
});
