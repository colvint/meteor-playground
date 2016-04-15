"use strict";

jest.unmock('../imports/ui/components/hello-world.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import HelloWorld from '../imports/ui/components/hello-world.jsx';

describe('hello world component', function () {
  let component;

  beforeEach(function () {
    component = ReactTestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('displays hello world', function () {
    const h1Node = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'h1');

    expect(h1Node.textContent).toEqual('Hello World');
  });

  it('increments the click count', function () {
    const btnNode = ReactTestUtils.findRenderedDOMComponentWithTag(component, 'button');

    expect(component.state.clickCount).toEqual(0);
    ReactTestUtils.Simulate.click(btnNode);
    expect(component.state.clickCount).toEqual(1);
  });
});
