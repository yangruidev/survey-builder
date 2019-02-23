//@flow
import React from 'react'
import type { ComboType } from '../SurveyEditor/models/schema'

type Props = {
  isOpen: boolean,
  children: Function,
  title?: string,
  handleClose: () => void,
}

type State = {}

const Modal = props => {
  //Modal is transparent, pass whatever received down to the children
  const { title, children, handleClose, ...rest } = props
  const childrenComponent = typeof children === 'function' ? children({ ...rest }) : children //support render props
  const openControlClass = `modal ${props.isOpen ? 'is-active' : ''}`

  return (
    <div className={openControlClass}>
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{title}</p>
          <button className="delete" aria-label="close" onClick={handleClose} />
        </header>
        <section className="modal-card-body">{childrenComponent}</section>
      </div>
    </div>
  )
}

export default Modal
