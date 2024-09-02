import React, { useEffect, useContext, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { ProductsContext } from '../../context/ProductsProvider'
import './ProductDetails.css'

function ProductDetails() {
    
    const { id } = useParams()
    const { getProductById, addToCart } = useContext(ProductsContext)
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
            const fetchedProduct = await getProductById(id)
            setLoading(false)
            setProduct(fetchedProduct)
        }
        getProduct()
    }, [id, getProductById])

    if (loading) {
        return (
            <p>Produto não foi encontrado.</p>
        )
    }

    return (
        <div className="product-details">
            <div className="product-img">
                <img src={ product.imageUrl } alt=""/>
            </div>
            <div className="product-info">
                <h5>Cesta</h5>
                <h2>{ product.title }</h2>
                <h4 className="price">R$ { product.price }</h4>
                <p>{ product.description }</p>
                <NavLink 
                    className="button" 
                    onClick={() => addToCart(product)} 
                    to="/carrinho">
                    Adicionar ao carrinho
                </NavLink>
            </div>
        </div>
    )
}

export default ProductDetails;
