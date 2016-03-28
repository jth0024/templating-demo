import $ from 'jquery';
import { createComponent } from '../../helpers/component';

export const posts = createComponent({
  beforeRender() {
    console.log('before render fired');
  },
  afterRender() {
    const postsElement = $('.posts');
    const postsId = postsElement.find('#postsId');
    postsId.append(this.props.post);
  },
  inputs: [
    'post'
  ],
  name: 'posts',
  template: `
    <div
      class="posts">
      Post id: <span id="postsId"></span>
    </div>
  `,
});
