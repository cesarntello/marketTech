import React from 'react'
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from './NavbarElemets'
import CartWidget from './CartWidget';




const Navbar = () => {

const categorias = [
{id:'123', address: '/', text:'Home'},
{id:'456', address:'categoria/Componentes', text:'Componentes'},
{id:'789', address: 'categoria/Perifericos', text:'Periféricos'}

]

    return (
    <>
    
            <Nav>
                <NavLink to='/'>
                    <h1 className="Logo">techMarket</h1>
                </NavLink>
                <Bars/>
                <NavMenu>
                
                    {categorias.map((cat) =>{
                        return(

                            <NavLink to={cat.address}  key={cat.id} >
                        {cat.text}
                    </NavLink>
                        );
                    
                    })},
                    
                    {/* <NavLink to="/Componentes" activeStyle key={cat.id}>
                        {cat.text}
                    </NavLink>
                    
                    <NavLink to="/Perifericos" activeStyle key={cat.id}>
                        Periféricos
                    </NavLink>
                    
                    <NavLink to="/Quienes" activeStyle>
                        Quienes somos
                    </NavLink> */}
                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/signin">
                    Sign in
                    </NavBtnLink>
                </NavBtn>
                <CartWidget/>
            </Nav>
        
    </>
    );
}

export default Navbar;