import { Component } from 'react';
import { Form } from './Form';

export class Modal extends Component {
  state = {
    isOpen: 'modal-overlay',
  };

  addClass = () => {
    this.setState({ isOpen: 'modal-overlay is-open' });
  };

  removeClass = () => {
    this.setState({ isOpen: 'modal-overlay' });
  };

  render() {
    return (
      <>
        <div className={this.state.isOpen}>
          <div className="modal-window-inner">
            <button
              onClick={this.removeClass}
              type="button"
              className="button-modal-close"
            >
              ❌
            </button>
            <Form></Form>
          </div>
        </div>
        <button type="button" onClick={this.addClass}>
          Open modal
        </button>
      </>
    );
  }
}
