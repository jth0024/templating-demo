import $ from 'jquery';
import { assign, reduce } from 'lodash';

export function createElement(Type, config = null, ...children) {
  const props = assign({}, config, { children });
  if (typeof Type === 'function') {
    const componentInstance = new Type(props);
    return assign(componentInstance.render(), Type.prototype);
  }
  return assign({}, {
    props,
    toNode() {
      return $(`<${Type}${buildPropsString(config)}></${Type}>`);
    },
  });
}

function buildPropsString(props) {
  if (props === null) return '';
  return reduce(props, (result, value, key) => {
    return `${result} ${key}="${value}"`;
  }, ' ');
}
