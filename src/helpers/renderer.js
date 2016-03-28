import $ from 'jquery';

export function render(Component, elementRef) {
  const element = typeof elementRef === 'undefined'
    ? $(`${Component.prototype.name}`)
    : $(elementRef);
  const props = mapInputsToProps(element, Component.prototype.inputs);
  const componentInstance = new Component(props);
  componentInstance.beforeRender();

  element
    .empty()
    .append(componentInstance.template);

  componentInstance.childComponents.forEach(childComponent => {
    render(childComponent, undefined);
  });
  componentInstance.afterRender();
}

function mapInputsToProps(element, inputs) {
  const props = {};
  inputs.forEach(input => {
    $.extend(props, {
      [input]: element.data(input),
    });
  });
  return props;
}
