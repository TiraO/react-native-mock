import React from 'react';

function createMockComponent(displayName) {
  return React.createClass({
    displayName,
    render() {
      return <div {...this.props}>{...this.props.children}</div>;
    },
  });
}

module.exports = createMockComponent;
