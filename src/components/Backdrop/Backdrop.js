import React from 'react';
import Modal from '../Modal/Modal';
import classes from './Backdrop.module.css';

const backdrop = props => {
    return (
        <div className={classes.Backdrop}
                onClick={props.modalRemove}>
            <Modal formError={props.incompleteForm}/>
        </div>
    )
};

export default backdrop;