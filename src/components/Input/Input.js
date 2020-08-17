import React from 'react'
import classes from './Input.module.css';

const input = props => {
    let [element,elementList] = [
        null,
        Object.entries(props.config),
    ];
    if (!props.elementsAreActive) {
        element = elementList.map((el, index)=>{
            let [elType, ph] = [
                el[1].elementConfig.type,
                el[1].elementConfig.placeHolder
            ];
            switch(elType){
                case 'text':
                    return (
                        <React.Fragment key={ph}>
                            <label className={classes.TextLabel}
                                    >{ph}</label>
                            <input
                                className={classes.InputMargin}
                                onChange={props.inputChanged}
                                placeholder={ph}
                                required
                            />
                        </React.Fragment>
                    );
                break;
                default:
                    return null;
            }                
        });
    };
    return (
            <div className={classes.InputDiv}>
                {element}
            </div>
    )
};

export default input;
