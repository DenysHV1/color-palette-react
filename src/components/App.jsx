import { Component } from 'react';

import { Modal } from './Modal/Modal';

import { Clicker } from './Clicker/Clicker';

import { ColorPicker } from './ColorPicker/ColorPicker';

import { BottomMenu } from './BottomMenu/BottomMenu';

import { Block } from './Block/Block';
import { Buttons } from './Block/Buttons';

export class App extends Component {
  state = {
    isShove: false,
  };



  //todo BLOCK-------------------------
  shoveBlock = () => {
    this.setState({ isShove: true });
  };
  hideBlock = () => {
    this.setState({ isShove: false });
  };
  //todo BLOCK-------------------------


  render() {
    return (
      <>
		<Modal></Modal>
        <Clicker></Clicker>
		<ColorPicker></ColorPicker>
		<BottomMenu></BottomMenu>
        <div className='blockContainer'>
          <Buttons
            shoveBlock={this.shoveBlock}
            hideBlock={this.hideBlock}
          ></Buttons>
          <Block isShove = {this.state.isShove}></Block>
        </div>
      </>
    );
  }
}
