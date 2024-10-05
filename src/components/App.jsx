import { Component } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';


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
      <div className='container'>
        <ColorPicker></ColorPicker>
      </div>
    );
  }
}
