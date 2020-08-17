import React from 'react'
import classes from './TestArea.module.css';

const textArea = props => {
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
                case 'textArea':
                    return (
                        <div className={classes.LabelTa}key={ph}>
                            <label className={classes.CheckLabel}
                                >{ph}</label>
                            <textarea
                                className={classes.TaInput}
                                onChange={props.inputChanged}
                                placeholder={ph}
                                cols={el[1].cols}
                                rows={el[1].rows}
                                required
                            ></textarea>
                        </div>
                    )    
                break;
                default:
                    return null;
        }})
    };
    return (
        <div className={classes.TextAreaBox}>
            {element}
        </div>
      
    )};

export default textArea;