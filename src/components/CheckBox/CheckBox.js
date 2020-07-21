import React from 'react'
import classes from './CheckBox.module.css';

const checkBox = props => {
    let elements = props.elements.map((type,i) => {
        if (type[1].elementConfig.type === 'checkbox') {
            let [elType,ph, vl] = [ 
                        type[1].elementConfig.type,
                        type[1].elementConfig.placeHolder,
                        type[1].value
            ];
            
            return (
                <div key={vl + i} className={classes.InputDiv}>
                    <label className={classes.CheckLabel}
                            htmlFor={elType}>{ph}</label>
                    <input
                        className={classes.CheckInput}                     
                        type={elType}                        
                        defaultValue={vl} 
                        required
                    />
                </div>
                )                                  
        }})
    return (
        <div className={classes.InputDivContainer}>
            {elements}
        </div>        
    )
};

export default checkBox;