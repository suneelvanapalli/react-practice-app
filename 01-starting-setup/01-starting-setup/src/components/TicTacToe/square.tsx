import React from 'react';
import './square.css';

type MyProps = {
  value: string;
  onClick: () => void;
};
type MyState = {};

class Square extends React.Component<MyProps, MyState> {
  render() {
    return (
      <button className='square' onClick={this.props.onClick}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
