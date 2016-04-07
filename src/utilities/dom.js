import $ from 'jquery';

export function render(element, target) {
  if (typeof element === 'string') {
    $(target).append(element);
  } else {
    if (typeof element.beforeRender === 'function') {
      element.beforeRender();
    }
    const node = element.toNode();
    $(target).append(node);
    element.props.children.forEach(child => render(child, node));
    if (typeof element.afterRender === 'function') {
      element.afterRender();
    }
  }
}
