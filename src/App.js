import React from 'react';
import ProductForm from './containers/ProductForm/ProductForm';
import classes from './App.module.css';


const App = () => {
    return (
        <div className={classes.App}>
            <ProductForm />
        </div>       
    )
};

export default App;