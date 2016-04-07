import $ from 'jquery';
import { merge, reduce } from 'lodash';

function Element(tagName, attrs, props) {
  this.props = props;
  this.node = $(`<${tagName}${buildAttributes(attrs)}></${tagName}>`);
  this.tagName = tagName;
}

export function createElement(Type, config = null, ...children) {
  const props = merge({}, config, { children });
  if (typeof Type === 'function') {
    const componentInstance = new Type(props);
    componentInstance.beforeRender();
    return merge(componentInstance.render(), componentInstance);
  }
  return new Element(Type, config, props);
}

function buildAttributes(config) {
  if (config === null) return '';
  return reduce(config, (result, value, key) => {
    return `${result} ${key}="${value}"`;
  }, ' ');
}
