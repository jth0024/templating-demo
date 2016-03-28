import { createComponent } from '../../helpers/component';

export const about = createComponent({
  afterRender() {
    console.log('About page rendered');
  },
  name: 'about',
  template: `
    <div
      class="about">
      Welcome to About! View <a href="./#/posts/1">posts</a>?
    </div>
  `,
});
