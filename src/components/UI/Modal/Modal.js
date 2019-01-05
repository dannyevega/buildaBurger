import React from 'react';
import classes from './Modal.css';

const Modal = (props) => {
 return (
    <div
      className={classes.Modal}
      style={{
        transform: props.visible ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.visible ? '1' : '0'
      }}>
        {props.children}
    </div>   
 )
}

export default Modal;