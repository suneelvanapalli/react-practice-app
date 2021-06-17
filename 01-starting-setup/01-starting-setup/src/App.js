import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <Header name='My (Not) First React App'></Header>

        <div>
          <h2>Let's get started!</h2>
          <p>Time is {this.state.date.toLocaleTimeString()}</p>
        </div>
      </div>
    );
  }
}

export default App;

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <section>{this.props.name}</section>;
  }
}
