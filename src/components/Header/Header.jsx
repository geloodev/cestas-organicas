import React from 'react'
import './Header.css'
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                <i className="logoface bx bx-basket"></i>
                <NavLink to="/">Cestas Orgânicas</NavLink>
            </div>
            <nav className="menu">
                <NavLink className="menu-item" to="/">Início</NavLink>
                <NavLink className="menu-item" to="/produtos">Produtos</NavLink>
                <NavLink className="menu-item" to="/cadastro">Cadastro</NavLink>
            </nav>
        </header>
    )
}

export default Header;
