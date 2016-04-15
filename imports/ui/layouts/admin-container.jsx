import React from 'react';

export default class AdminContainer extends React.Component {
  render() {
    return (
      <div id="admin-container">
        {this.props.children}
      </div>
    );
  }
};
