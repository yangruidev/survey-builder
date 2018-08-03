//@flow
import React from 'react';
import type { ComboType } from '../SurveyEditor/models/schema';

type Props = {
  isOpen: boolean,
  children: Function,
  title?: string,
  handleClose: () => void
};

type State = {};

class Modal extends React.Component<Props, State> {
  render() {
    //Modal is transparent, pass whatever received down to the children
    const { title, children, handleClose, ...rest } = this.props;
    const childrenComponent = //support render props
      typeof children === 'function' ? children({ ...rest }) : children;
    const openControlClass = `modal ${this.props.isOpen ? 'is-active' : ''}`;

    return (
      <div className={openControlClass}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleClose}
            />
          </header>
          <section className="modal-card-body">{childrenComponent}</section>
        </div>
      </div>
    );
  }
}

export default Modal;
