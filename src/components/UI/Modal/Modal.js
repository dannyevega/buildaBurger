import React from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const Modal = (props) => {
  return (
    <>
      <Backdrop show={props.visible} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.visible ? '1' : '0'
        }}>
          {props.children}
      </div>
    </>
  )
}

export default Modal;