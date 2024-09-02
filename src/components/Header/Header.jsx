import React, { useContext } from 'react'
import { NavLink } from "react-router-dom";
import { UserContext } from '../../context/UserProvider'
import './Header.css'

function Header() {

    const { currentUser, logoutUser } = useContext(UserContext)

    return (
        <header className="header">
            <div className="logo">
                <i className="logoface bx bx-basket"></i>
                <NavLink to="/">Cestas Orgânicas</NavLink>
            </div>
            <nav className="menu">
                <NavLink className="menu-item" to="/">Início</NavLink>
                <NavLink className="menu-item" to="/produtos">Produtos</NavLink>
                { 
                    currentUser ? (
                        <>
                            <NavLink className="menu-item" to="/entrar">
                                { currentUser.email }
                            </NavLink>
                            <button className="menu-item" onClick={ logoutUser }>
                                <i className="bx bx-log-out"></i>
                            </button>
                        </>
                    ) : (
                        <NavLink className="menu-item" to="/entrar">
                            Entrar/Cadastro
                        </NavLink>
                    )
                }
            </nav>
        </header>
    )
}

export default Header;
