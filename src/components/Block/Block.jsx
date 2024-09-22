import { Component } from 'react';

export class Block extends Component {
  state = {
    color: 'green',
  };

  changeColor = () => {
    this.setState(() => {
      return { color: getRandomHexColor() };
    });
  };
  render() {
    return (
      <>
        {this.props.isShove && (
          <div
            className="block"
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <button className='blockBtn' onClick={this.changeColor}>change color</button>
          </div>
        )}
      </>
    );
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
