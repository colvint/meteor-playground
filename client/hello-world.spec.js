import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'meteor/practicalmeteor:chai';
import HelloWorld from './hello-world.jsx';

describe('hello world component', function () {
  let component;

  before(function () {
    component = ReactTestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('displays hello world', function () {
    const h1Node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');

    expect(h1Node.textContent).to.equal('Hello World');
  });

  it('increments the click count', function () {
    const btnNode = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');

    expect(component.state.clickCount).to.equal(0);
    ReactTestUtils.Simulate.click(btnNode);
    expect(component.state.clickCount).to.equal(1);
  });
});
