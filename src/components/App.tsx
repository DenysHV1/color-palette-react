import { Component } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';

interface IAppProps {}

interface IAppState {}

export class App extends Component<IAppProps, IAppState> {
  render() {
    return (
      <div className="container">
        <ColorPicker />
      </div>
    );
  }
}
