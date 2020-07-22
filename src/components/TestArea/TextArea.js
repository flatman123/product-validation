import React from 'react'
import classes from './TestArea.module.css';

const textArea = props => {
    let elements = props.elements.map((type,i) => {
        if (type[1].elementConfig.type === 'textArea') {
            let [elType, ph, col, row, vl, min, max] = [ 
                        type[1].elementConfig.type,
                        type[1].elementConfig.placeHolder,
                        type[1].cols,
                        type[1].rows,
                        type[1].value,
                        type[1].minLength,
                        type[1].minHeigth
            ];
            console.log(min)
            return (
                <div key={vl + i} className={classes.TextAreaBox}>
                    <label className={classes.CheckLabel}
                            htmlFor={elType}>{ph}</label>
                    <textarea
                        className={classes.TaInput}                     
                        type={elType}                        
                        placeholder={type[0]}
                        rows={row}
                        cols={col}
                        minLength={50}
                        required
                    ></textarea>
                </div>
                )                                  
        }})
    return (
        <div className={classes.TestAreaContainer}>
            {elements}
        </div>        
    )};

export default textArea;