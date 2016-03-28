import { createComponent } from '../../helpers/component';

export const topbar = createComponent({
  afterRender() {
    console.log('after topbar render');
  },
  beforeRender() {
    console.log('before topbar render');
    console.log('props: ', this.props);
  },
  inputs: [
    'test',
  ],
  name: 'topbar',
  template: `
    <a href="./#/home">Home</a>
    <a href="./#/about">About</a>
    <a href="./#/posts/1">Posts</a>
  `,
});
