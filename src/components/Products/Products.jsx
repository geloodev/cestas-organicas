import React from 'react'
import Product from '../Product/Product'
import './Products.css'

function Products() {
    return (
        <div className="cestas">
            <div className="cestas-heading">
                <h2>Cestas Orgânicas Prontas</h2>
                <h5>Escolha a cesta que melhor atende suas necessidades:</h5>
            </div>
            <div className="cestas-cards">
                <Product 
                    id="VpImxLWKXVDhKfstkEal"
                    isBest="false"
                    promo="None"
                    title="Pequena"
                    imageUrl="cesta-pequena.jpg"
                    description="Ideal para indivíduos ou casais, com uma seleção variada de vegetais e frutas frescas da estação."
                    buttonClass="btn btn-secondary"
                />
                <Product 
                    id="wmUO4xkiIXRvbGYkB5mZ"
                    isBest="true"
                    promo="Mais Comprado"
                    title="Padrão"
                    imageUrl="cesta-padrao.jpg"
                    description="Indicada para famílias pequenas ou para quem gosta de cozinhar, com uma ampla gama de produtos frescos."
                    buttonClass="btn btn-primary"
                />
                <Product 
                    id="KDGLaFAUy7ITC9aJsWcO"
                    isBest="false"
                    promo="None"
                    title="Família"
                    imageUrl="cesta-familia.jpg"
                    description="Projetada para famílias maiores, contém a maior variedade e quantidade de produtos frescos."
                    buttonClass="btn btn-secondary"
                />
            </div>
        </div>
    )
}

export default Products;
