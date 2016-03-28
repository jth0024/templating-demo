import $ from 'jquery';
import { createComponent } from '../../helpers/component';
import template from './home.html';

export const home = createComponent({
  afterRender,
  inputs: [
    'hello',
  ],
  name: 'home',
  template,
});

function afterRender() {
  const homeElement = $('.home');
  console.log('home:', homeElement);
}
