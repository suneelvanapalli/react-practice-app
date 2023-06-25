import React from 'react';

type MyProps = {
  versions: number;
  onClick: (index: number) => {};
};
type MyState = {};

class History extends React.Component<MyProps, MyState> {
  render() {
    return (
      <ul>
        {[...Array(this.props.versions)].map((e, i) => {
          return (
            <li
              key={i}
              onClick={() => {
                this.props.onClick(i);
              }}
            >
              Move {i}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default History;
