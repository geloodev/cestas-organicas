import React from 'react'
import './Hero.css'
import { NavLink } from "react-router-dom";

function Hero() {
    return (
        <div className="hero">
            <div className="hero-text">
                <h1>
                    Os melhores<br/>
                    produtos <span>orgânicos</span><br/>
                    para a sua saúde e<br/>
                    para o seu bolso
                </h1>
                <div className="hero-cta">
                    <NavLink className="primary-btn" to="/cadastro">
                        Cadastrar-se
                    </NavLink>
                    <NavLink className="secondary-btn" to="/produtos">
                        Nossos Produtos
                    </NavLink>
                </div>
            </div>
            <div className="hero-img">
                <img src="hero-img.svg" alt="" />
            </div>
        </div>
    )
}

export default Hero;
