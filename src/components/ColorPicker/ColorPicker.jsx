import { Component } from 'react';
import { colors } from './colors';

export class ColorPicker extends Component {
  //todo state
  state = {
    ourColorsArr: colors,
    content: '#45ff33',
    inx: 1,
    currentColor: '#b9b9b9',
  };
  //todo functions
  changeContent = (id, color) => {
    this.setState({ inx: id - 1, content: color, currentColor: color });
  };

  addShadow = idx => {
    const arrClasses = ['colorItem'];
    if (idx === this.state.inx) {
      arrClasses.push('is-active');
    }
    return arrClasses.join(' ');
  };
  //todo render
  render() {
    return (
      <div className="colorPickerContainer">
        <p>
          Color : <span>{this.state.content}</span>
        </p>
        <ul className="colorPalette">
          <ColorBlock
            callback={this.changeContent}
            items={this.state.ourColorsArr}
            addShadow={this.addShadow}
            currentColor={this.state.currentColor}
          ></ColorBlock>
        </ul>
      </div>
    );
  }
}

function ColorBlock({ items, callback, addShadow, currentColor }) {
  return items.map(({ id, color }, idx) => {
    return (
      <li
        onClick={() => callback(id, color)}
        className={addShadow(idx)}
        key={id}
        datatype={color}
        style={{ backgroundColor: currentColor }}
      >
        {color}
      </li>
    );
  });
}
