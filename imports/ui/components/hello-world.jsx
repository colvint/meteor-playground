import React from 'react';
import _ from 'underscore';

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clickCount: 0,
      tickers: ['rate', 'fb', 'goog', 'aapl'],
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
        <h3>Stock Tickers</h3>
        <ul>
          {_.map(this.state.tickers, (ticker, i) => {
            return (
              <li key={i}>
                <a href={`/admin/stock/${ticker}`}>{ticker}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
