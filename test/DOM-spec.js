import { expect } from 'chai';
import { createComponent, createElement } from '../src/helpers/DOM';

describe('createElement', () => {
  it('handles an empty element', () => {
    const actualElement = removeWhitespace(createElement('div'));
    const expectedElement = removeWhitespace('<div></div>');
    expect(actualElement).to.eql(expectedElement);
  });

  it('handles an element with text', () => {
    const actualElement = removeWhitespace(createElement('div', null, 'some text'));
    const expectedElement = removeWhitespace('<div> some text </div>');
    expect(actualElement).to.equal(expectedElement);
  });

  it('handles nested elements', () => {
    const childElement = createElement('div');
    const parentElement = removeWhitespace(createElement('div', null, childElement));
    const expectedElement = removeWhitespace(`<div> <div></div> </div>`);
    expect(parentElement).to.eql(expectedElement);
  });

  it('handles custom components', () => {
    const component = createComponent({
      render() {
        return createElement('div', null, 'some text');
      },
    });
    const actualElement = removeWhitespace(createElement(component));
    const expectedElement = removeWhitespace('<div> some text </div>');
    expect(actualElement).to.equal(expectedElement);
  });

  it('handles custom components with props', () => {
    const component = createComponent({
      render() {
        return this.props.blockElement
          ? createElement('div', null, 'some text')
          : createElement('span', null, 'some text');
      },
    });
    const actualElement = removeWhitespace(createElement(component, {
      blockElement: false,
    }));
    const expectedElement = removeWhitespace('<span> some text </span>');
    expect(actualElement).to.equal(expectedElement);
  });
});

function removeWhitespace(parentElement) {
  return parentElement.replace(/\s+/g, ' ').trim();
}
