import { Component } from 'react';

import ColorBlock from '../ColorBlock/ColorBlock';
import { colors, IColors } from '../colors';

interface IColorPicker {
  ourColorsArr: IColors[];
  content: string;
  inx: number;
  currentColor: string;
}

export class ColorPicker extends Component<{}, IColorPicker> {
  state = {
    ourColorsArr: colors,
    content: '#45ff33',
    inx: 1,
    currentColor: '#b9b9b9',
  };

  changeContent = (id: number, color: string): void => {
    this.setState({ inx: id - 1, content: color, currentColor: color });
  };

  addShadow = (idx: number): string => {
    const arrClasses = ['colorItem'];
    if (idx === this.state.inx) {
      arrClasses.push('is-active');
    }
    return arrClasses.join(' ');
  };

  render() {
    return (
      <div className="colorPickerContainer">
        <p>
          Color : <span>{this.state.content}</span>
        </p>
        <ColorBlock
          callback={this.changeContent}
          items={this.state.ourColorsArr}
          addShadow={this.addShadow}
          currentColor={this.state.currentColor}
        ></ColorBlock>
      </div>
    );
  }
}
