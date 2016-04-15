import React from 'react';

export default class StockTicker extends React.Component {
  render() {
    const symbol = this.props.params.ticker;

    return (
      <div>
        <div><a href="/">Back</a></div>
        Stock {symbol}
      </div>
    );
  }
}
