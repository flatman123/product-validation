import React from 'react';
import ProductForm from './containers/ProductForm/ProductForm';
import classes from './App.module.css';
import Header from './components/Header/Header';

const App = () => {
        return (
            <React.Fragment>
                 <div className={classes.App}>
                    <Header />
                </div>    
            </React.Fragment>
   
        )
};

export default App;