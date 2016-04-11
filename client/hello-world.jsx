import React from 'react';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState((previousState, currentProps) => {
      return { clickCount: previousState.clickCount + 1 };
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <button onClick={this.handleClick}>Click Me!</button>
        <div>Clicked the button {this.state.clickCount} times.</div>
      </div>
    );
  }
}
