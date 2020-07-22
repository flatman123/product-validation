import React from 'react';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TestArea/TextArea';
import CheckBox from '../../components/CheckBox/CheckBox';

import classes from './ProductForm.module.css';


class ProductForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            asin: {
                elementConfig: {
                    type: 'text',
                    placeHolder: 'asin'
                },
                value: ''
            },
            productName: {
                elementConfig: {
                    type: 'text',
                    placeHolder: 'productName'
                },
                value: ''
            },
            link: {
                elementConfig: {
                    type: 'text',
                    placeHolder: 'link'
                },
                value: ''
            },
            quantity: {
                elementConfig: {
                    type: 'textArea',
                    placeHolder: 'quantify'
                },
                value: '',
                cols: '20',
                rows: '3',
                minLength: '50',
                minHeigth: '50'
            },
            functionality: {
                elementConfig: {
                    type: 'textArea',
                    placeHolder: 'functionality'
                },
                value: '',
                cols: '20',
                rows: '3',
                minLength: '10',
                minHeigth: '10'
            },
            quality: {
                elementConfig: {
                    type: 'textArea',
                    placeHolder: 'quality'
                },
                value: '',
                cols: '20',
                rows: '3',
                minLength: '10',
                minHeigth: '10'
            },
            aesthetic: {
                elementConfig: {
                    type: 'textArea',
                    placeHolder: 'aesthetic'
                },
                value: '',
                cols: '20',
                rows: '3',
                minLength: '10',
                minHeigth: '10'
            },
            age: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'age'
                },
                value: 'age'
            },
            BSR: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'BSR'
                },
                value: 'BSR'
            },
            marketDepth: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'marketDepth'
                },
                value: 'marketDepth'
            },
            competitor: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'competitor'
                },
                value: 'competitor'
            },
            gTrends: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'gTrends'
                },
                value: 'gTrends'
            },
            reviews: {
                elementConfig: {
                    type: 'checkbox',
                    placeHolder: 'reviews'
                },
                value: 'reviews'
            },
        }
    }
    render() {
        let elements = Object.entries(this.state)
        return (
            <form className={classes.FieldContainer}>
                <Input elements={elements} />
                <CheckBox elements={elements} />
                <TextArea elements={elements} />
            </form>
        )
    }
};

export default ProductForm;