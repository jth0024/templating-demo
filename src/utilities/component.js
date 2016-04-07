export function createComponent(args) {
  if (typeof args.render !== 'function') throw new Error('Components must supply a render!');

  const Component = function Component(props) {
    this.afterRender = args.afterRender || noop;
    this.beforeRender = args.beforeRender || noop;
    this.render = args.render;
    this.state = {};
    this.props = props || {};
  };
  return Component;
}

function noop() {}
