import { Component } from 'react';

export class Clicker extends Component {
  state = {
    value: 0,
    box: <></>,
  };
  addFunk = () => {
    this.setState(prefState => ({ value: prefState.value + 1 }));
  };
  minusFunk = () => {
    this.setState(({ value }) => ({ value: value > 0 ? value - 1 : value = 0 }));
  };

  render() {
    return (
      <div className='clickerContainer'>
        <p>{this.state.value}</p>
        <>{this.state.box}</>
		<div className='buttonsClicker'>
        <button onClick={this.addFunk}>+</button>
        <button onClick={this.minusFunk}>-</button>
		</div>
      </div>
    );
  }
}

