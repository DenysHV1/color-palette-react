import { Component } from 'react';

export class BottomMenu extends Component {
  state = {
    visible: false,
  };
toggleMenu = () => {
	this.setState ((prevState) => {
		return {visible: !prevState.visible}
	})
}
mouseToggle = () => {
	this.setState ((prevState) => {
		return {visible: !prevState.visible}
	})
}

  render() {
    return (
      <div className="bottom-menu-container">
        <button onClick={this.toggleMenu} onMouseOver={this.mouseToggle} className="BottomMenuBtn">{this.state.visible ? 'Close' : 'Open'}</button>
        {this.state.visible && <div className="bottomMenuBlock">My Menu</div>}
      </div>
    );
  }
}
