import $ from 'jquery';
import { assign, reduce } from 'lodash';

export function createComponent(args) {
  if (typeof args.render !== 'function') throw new Error('Components must supply a render!');

  const constructor = function constructor(props) {
    this.props = props || {};
    this.afterRender = args.afterRender || 0;
    this.beforeRender = args.beforeRender || 0;
    this.render = args.render;
  };

  return constructor;
}

export function createElement(type, config = null, ...children) {
  if (typeof type === 'function') {
    const props = assign({}, config, { children });
    const componentInstance = new type(props);
    componentInstance.beforeRender();
    const template = componentInstance.render();
    componentInstance.afterRender();
    return template;
  }
  if (children.length === 0) {
    return `<${type}${buildPropsString(config)}></${type}>`;
  }
  return `
    <${type}${buildPropsString(config)}>
      ${reduce(children, (acc, child) => `${acc} ${child}`)}
    </${type}>
  `;
}

export function render(element, elementRef) {
  $(elementRef).html(element);
}

function buildPropsString(props) {
  if (props === null) return '';
  return reduce(props, (result, value, key) => {
    return `${result} ${key}="${value}"`;
  }, ' ');
}
