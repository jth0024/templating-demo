import $ from 'jquery';

export function render(element, target) {
  if (typeof element === 'string') {
    $(target).append(element);
  } else {
    $(target).append(element.node);
    element.props.children.forEach(child => render(child, element.node));
    if (typeof element.afterRender === 'function') {
      element.afterRender();
    }
  }
}
