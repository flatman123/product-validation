import React from 'react';
import { BrowserRouter, NavLink, Switch, Route } from 'react-router-dom';
import classes from './Header.module.css';
import ProductInfo from '../../containers/ProductInfo/ProductInfo';
import ProductForm from '../../containers/ProductForm/ProductForm';



const header = () => {
    return (  
        <>      
        <header>            
                <nav>
                    <ul className={classes.Ulbody}>
                        <li className={classes.NavLi}>
                            <NavLink to='/' className={classes.NavAtag}>
                                Home
                            </NavLink>
                        </li>

                        <li className={classes.NavLi}>
                            <NavLink to='/pg2' className={classes.NavAtag}>
                                PAGE 2
                            </NavLink>
                        </li>

                    </ul>
                </nav>
        </header>
        <Switch>
            <Route path='/pg2' component={ProductInfo} />
            <Route path='/' exact component={ProductForm} />
        </Switch>

        </>
    )
}

export default header;