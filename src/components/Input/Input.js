import React from 'react'
import classes from './Input.module.css';

const input = props => {
    let elements = props.elements.map((type,i) => {
        if (type[1].elementConfig.type === 'text') {
            let [elType,ph, vl] = [ 
                        type[1].elementConfig.type,
                        type[1].elementConfig.placeHolder,
                        type[1].value
            ];
            
            return (
                <div key={vl + i} className={classes.InputDiv}>
                    <label className={classes.Label}
                            htmlFor={elType}>{ph}</label>
                    <input
                        className={classes.InputMargin}                     
                        type={elType}                        
                        placeholder={ph} 
                        defaultValue={vl} 
                        required
                    />
                </div>
                )                                  
        }})

    return (    
        <div className={classes.InputContainer}>
         {elements}
        </div>
            
       
    )
};

export default input;