import React from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import classes from './Header.module.css';

const header = () => {
    return (
        <header>
            <BrowserRouter>
                <nav>
                    <ul className={classes.Ulbody}>
                        <li className={classes.NavLi}>
                            <NavLink to='/' className={classes.NavAtag}>
                                Home
                            </NavLink>
                        </li>

                        <li className={classes.NavLi}>
                            <NavLink to='/page-2' className={classes.NavAtag}>
                                PAGE 2
                            </NavLink>
                        </li>

                    </ul>
                </nav>
            </BrowserRouter>

        </header>
    )
}

export default header;