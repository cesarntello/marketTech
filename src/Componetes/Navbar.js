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
                    <h1 className="Logo">techMarket</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                    <NavLink to="/Componentes" activeStyle>
                        Componetes
                    </NavLink>
                    
                    <NavLink to="/Perifericos" activeStyle>
                        Periféricos
                    </NavLink>
                    
                    <NavLink to="/Quienes" activeStyle>
                        Quienes somos
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