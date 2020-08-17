import React from 'react';
import classes from './Modal.module.css';

const modal = props => {
    return (
        <div className={classes.Modal}>
            {props.formError}
            <div className={classes.modalX}></div>
        </div>
    )
};

export default modal;