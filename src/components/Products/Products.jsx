import React from 'react'
import './Products.css'
import { NavLink } from "react-router-dom";

function Products() {
    return (
        <div className="cestas">
            <div className="cestas-heading">
                <h2>Cestas Orgânicas Prontas</h2>
                <h5>Escolha a cesta que melhor atende suas necessidades:</h5>
            </div>
            <div className="cestas-cards">
                <div className="cesta-card">
                    <div className="cesta-card-text">
                        <div className="promo">
                            <p className="promo-text">None</p>
                        </div>
                        <h4>Pequena</h4>
                    </div>
                    <div className="cesta-card-img">
                        <img src="cesta-pequena.jpg" alt="cesta pequena" />
                    </div>
                    <NavLink className="btn secondary-btn">Comprar</NavLink>
                </div>
                <div className="cesta-card best">
                    <div className="cesta-card-text">
                        <div className="promo">
                            <i class="ph-fill ph-star"></i>
                            <p className="promo-text">Mais Comprado</p>
                        </div>
                        <h4>Padrão</h4>
                    </div>
                    <div className="cesta-card-img">
                        <img src="cesta-padrao.jpg" alt="cesta padrão" />
                    </div>
                    <NavLink className="btn primary-btn">Comprar</NavLink>
                </div>
                <div className="cesta-card">
                    <div className="cesta-card-text">
                        <div className="promo">
                            <p className="promo-text">None</p>
                        </div>
                        <h4>Família</h4>
                    </div>
                    <div className="cesta-card-img">
                        <img src="cesta-familia.jpg" alt="cesta família" />
                    </div>
                    <NavLink className="btn secondary-btn">Comprar</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Products;
