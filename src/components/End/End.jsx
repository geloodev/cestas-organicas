import React from 'react'
import './End.css'
import { NavLink } from "react-router-dom";

function End() {
    return (
        <div className="end">
            <h2>Gostou da ideia?</h2>
            <h5>Faça o cadastro para conseguir sua cesta orgânica.</h5>
            <NavLink className="primary-btn" to="/cadastro">Cadastre-se</NavLink>
        </div>
    )
}

export default End;
