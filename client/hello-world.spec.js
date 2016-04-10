import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-addons-test-utils';
import { chai } from 'meteor/practicalmeteor:chai';
import HelloWorld from './hello-world.jsx';

describe('hello world component', function () {
  let component;

  before(function () {
    component = ReactTestUtils.renderIntoDocument(<HelloWorld />);
  });

  it('displays hello world', function () {
    const node = ReactDOM.findDOMNode(component);

    chai.assert.equal('Hello World', node.textContent, "does not contain 'Hello World'");
  });
});
