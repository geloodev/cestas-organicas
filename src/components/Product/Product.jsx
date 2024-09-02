import React from 'react'
import './Product.css'
import { NavLink } from "react-router-dom";

    function Product({ 
        id, isBest, promo, title, imageUrl, description, buttonClass 
    }) {
    return (
        <div className={ isBest === 'true' ? 'cesta-card best' : 'cesta-card' }>
            <div className="cesta-card-text">
                <div className="promo">
                    <i className="ph-fill ph-star"></i>
                    <p className="promo-text">{ promo }</p>
                </div>
                <h4>{ title }</h4>
            </div>
            <div className="cesta-card-img">
                <img src={ imageUrl } alt="Cesta Orgânica" />
            </div>
            <p>{ description }</p>
            <NavLink className={ buttonClass } to={`/produtos/${id}`}>
                Comprar
            </NavLink>
        </div>
    )
}

export default Product;
