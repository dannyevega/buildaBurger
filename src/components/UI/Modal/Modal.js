import React, { Component } from 'react';
import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.visible !== this.props.visible
  }

  render () {
    return (
      <>
        <Backdrop show={this.props.visible} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.visible ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.visible ? '1' : '0'
          }}>
            {this.props.children}
        </div>
      </>
    )    
  }
}

export default Modal;