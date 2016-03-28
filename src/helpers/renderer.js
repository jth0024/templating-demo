import $ from 'jquery';

export function render(Component, elementRef) {
  const element = typeof elementRef === 'undefined'
    ? $(`${Component.prototype.name}`)
    : $(elementRef);
  const props = getComponentProps(element, Component.prototype.inputs);
  const componentInstance = new Component(props);

  componentInstance.beforeRender();
  renderToElement(componentInstance, element);
  componentInstance.afterRender();
}

function getComponentProps(element, inputs) {
  const props = {};
  inputs.forEach(input => {
    $.extend(props, {
      [input]: element.data(input),
    });
  });
  return props;
}

function renderToElement(componentInstance, element) {
  element
    .empty()
    .append(componentInstance.template);
  componentInstance.childComponents.forEach(childComponent => {
    render(childComponent, undefined);
  });
}
