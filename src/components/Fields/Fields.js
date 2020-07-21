import React from 'react'
import classes from './Fields.css';

const fields = props => {
    const [type,ph, vl] = [ 
                        props.element.elementConfig.type,
                        props.element.elementConfig.placeHolder,
                        props.element.elementConfig.value 
                    ];
    let element = <input type={type} key={vl} placeholder={ph} value={vl} required/>;
    let elLabel = null;

    switch (type) {
        case 'text':
            elLabel = <label className={classes.label} for={type}>{ph}</label>
            element = <input                        
                        type={type} 
                        key={vl}
                        placeholder={ph} 
                        value={vl} 
                        required
                    />
        break;

        case 'textArea':
            elLabel = <label for={type}>{ph}</label>
            element =   <textarea 
                            key={vl}
                            cols={props.element.elementConfig.cols}
                            rows={props.element.elementConfig.rows}
                            name={ph}
                            required
                        >
                        </textarea>
            break;

        case 'checkbox':
            elLabel = <label for={type}>{ph}</label>
            element = <input type={type} 
                            placeholder={ph} 
                            name={ph}
                            key={vl}
                            required
                        />;
        break;
        default:
            element;
    }
    return (
        <div>
            {elLabel}
            {element}
        </div>        
    )
};

export default fields;