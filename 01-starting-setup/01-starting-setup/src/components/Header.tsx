import React from 'react';

export default class Header extends React.Component {
  render() {
    return <section>{this.props.name}</section>;
  }
}
