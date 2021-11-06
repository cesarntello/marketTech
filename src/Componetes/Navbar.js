import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElemets'

const Navbar = () => {
    return (
    <>
            <Nav>
                <NavLink to='/'>
                    <h1>Logo</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/Componentes" activeStyle>
                        Componetes
                    </NavLink>
                    
                    <NavLink to="/Componentes" activeStyle>
                        Componetes
                    </NavLink>
                    
                    <NavLink to="/Componentes" activeStyle>
                        Componetes
                    </NavLink>
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                    Sign in
                    </NavBtnLink>
                </NavBtn>
            </Nav>
    </>
    );
}

export default Navbar;