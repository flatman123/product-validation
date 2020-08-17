import React from 'react';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TestArea/TextArea';
import CheckBox from '../../components/CheckBox/CheckBox';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/SubmitBtn';
import update  from 'immutability-helper';
import axios from '../../Axios/baseAxios';
import classes from './ProductForm.module.css';
import BackDrop from '../../components/Backdrop/Backdrop';
import firebase from 'firebase';


class ProductForm extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            modalActive: false,
            error: 'Please complete all fields before submitting',
            elementActive: false,
            formInputs:{
                asin: {
                    elementConfig: { type: 'text', placeHolder: 'asin'},
                    value: ''                                    
                },                
                productName: {
                    elementConfig: { type: 'text', placeHolder: 'productName'},
                    value: ''
                },
                link: {
                    elementConfig: {type: 'text',placeHolder: 'link' },
                    value: ''
                },
                quantity: {
                    elementConfig: {type: 'textArea', placeHolder: 'quantity' },
                    value: '',
                    cols: '20',
                    rows: '3',
                },
                functionality: {
                    elementConfig: {type: 'textArea', placeHolder: 'functionality' },
                    value: '',
                    cols: '20',
                    rows: '3',
                },
                quality: {
                    elementConfig: {type: 'textArea', placeHolder: 'quality'},
                    value: '',
                    cols: '20',
                    rows: '3',
                },
                aesthetic: {
                    elementConfig: {type: 'textArea', placeHolder: 'aesthetic'},
                    value: '',
                    cols: '20',
                    rows: '3',
                }
            }
        }
        this.getInputHandler = this.getInputHandler.bind(this);
        this.sendDateHandler = this.sendDateHandler.bind(this);
        this.backDropActiveHandler = this.backDropActiveHandler.bind(this)
    }

    getInputHandler = (event) => {
        const placeHolder = event.target.placeholder;
        const clonedState =  update(this.state.formInputs,
            {[placeHolder]:{
                value:{$set:event.target.value},
                }
            },
            {
                elementActive:{$set: true}
            }
        );
       this.setState({formInputs:clonedState})
    };

    backDropActiveHandler = () => {
        this.setState((prevState)=>{
            console.log(prevState.modalActive)
            return {modalActive: !prevState.modalActive}
        })
    }

    getDateHandler = event => {
        event.preventDefault();
        axios.get('/product.json')
                .then(response => {
                    console.log(response)
                }) 
    }

    formValidation() {        
        const elements= Object.entries(this.state.formInputs);
        for(let val of elements){
            if(val[1].value === ''){
                return false;
            }
        }
        return true;
    }

    sendDateHandler = (event)=> {
        event.preventDefault();
        const elements= Object.entries(this.state.formInputs);

        if(this.formValidation()){
            let product = elements.reduce((obj,el)=> {
                obj[el[0]]= el[1].value;          
                return obj;
            },{});
            axios.post('/product.json', product)
                .then(servResponse => null)
                .catch(error => alert('Something happened'));

            
            

        } else {  
            axios.get('/elementConfigs.json')
                .then(elementConfigs => {
                    // const newState = update(this.state,
                    //     {formInputs: {$set: elementConfigs.formInputs}});
                    // console.log(newState)
                    console.log(elementConfigs.data)
                    return
                })
                .catch(error => console.log('Something happened')); 
            this.setState({modalActive:true});
        }
 
    };    
    render() {
        return (
            <React.Fragment>
                {
                    this.state.modalActive && 
                    <BackDrop 
                           incompleteForm={this.state.error}
                           modalRemove={this.backDropActiveHandler}/>
                }
           
                <form className={classes.FieldContainer}>
                    <Input 
                        elementsAreActive={this.state.elementActive}
                        config={this.state.formInputs}
                        inputChanged={(event)=> this.getInputHandler(event)} /> 

                    <TextArea 
                            elementsAreActive={this.state.elementActive}
                            config={this.state.formInputs}
                            inputChanged={(event)=> this.getInputHandler(event)}
                         />
                    <Button clicked={this.sendDateHandler}/>
                </form>
            </React.Fragment>            
        )
    }
};

export default ProductForm;

            // age: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'age' },
            //     value: 'age'
            // },
            // BSR: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'BSR'},
            //     value: 'BSR'
            // },
            // marketDepth: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'marketDepth'},
            //     value: 'marketDepth'
            // },
            // competitor: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'competitor'},
            //     value: 'competitor'
            // },
            // gTrends: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'gTrends'},
            //     value: 'gTrends'
            // },
            // reviews: {
            //     elementConfig: {type: 'checkbox', placeHolder: 'reviews'},
            //     value: 'reviews'
            // },
            // inputsRendered: false