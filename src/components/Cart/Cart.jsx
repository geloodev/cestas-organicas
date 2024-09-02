import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsProvider'
import './Cart.css'

function Cart() {

    const { cart, getTotalPrice } = useContext(ProductsContext)

    return (
        <div className="cart">
            <h2>Carrinho</h2>
            {cart.length === 0 ? (
                <p>Seu carrinho está vazio.</p>
            ) : (
                <>                
                <div className="cart-list">
                    {cart.map((product, index) => (
                        <div className="cart-item" key={index}>
                            <div className="cart-item-img">
                                <img src={ product.imageUrl } alt=""/>
                            </div>
                            <div classname="cart-item-info">
                                <span>Cesta</span>
                                <h6>{ product.title }</h6>
                                <span>R$ { product.price }</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="buy-section">
                    <h5>Total: R$ ${getTotalPrice()}</h5>
                    <button >Comprar</button>
                </div>
                </>
            )}
        </div>
    )
}

export default Cart;
