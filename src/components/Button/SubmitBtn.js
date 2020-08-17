import React from 'react';
import classes from './SubmitBtn.module.css';


const button = props => {
    return (
        <button 
            className={classes.SubBtn}
            onClick={props.clicked}>
                SUBMIT PRODUCT INFO
        </button>
    )
}

export default button;