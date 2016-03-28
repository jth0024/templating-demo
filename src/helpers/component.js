export function createComponent(args) {
  if (typeof args.name !== 'string') throw new Error('Components must supply a component name!');
  if (typeof args.template !== 'string') throw new Error('Components must supply a template!');

  const constructor = function constructor(props) {
    this.afterRender = args.afterRender || defaultAfterRender;
    this.beforeRender = args.beforeRender || defaultBeforeRender;
    this.props = props || {};
    this.template = args.template;
  };
  constructor.prototype.childComponents = args.childComponents || [];
  constructor.prototype.inputs = args.inputs || [];
  constructor.prototype.name = args.name;

  return constructor;
}

function defaultAfterRender() {}

function defaultBeforeRender() {}
