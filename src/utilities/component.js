export function createComponent(args) {
  if (typeof args.render !== 'function') throw new Error('Components must supply a render!');

  const constructor = function constructor(props) {
    this.props = props || {};
  };
  constructor.prototype.afterRender = args.afterRender || 0;
  constructor.prototype.beforeRender = args.beforeRender || 0;
  constructor.prototype.render = args.render;

  return constructor;
}
