import React, { useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'

export const ProductsContext = React.createContext()

function ProductsProvider(props) {

    const [cart, setCart] = useState([])

    async function getProductById(productId) {
        try {
            const productDocRef = doc(db, 'products', productId)
            const productDoc = await getDoc(productDocRef)

            if (productDoc.exists()) return {
                id: productDoc.id,
                ...productDoc.data()
            }
            else {
                console.log('NO SUCH PRODUCT!')
                return null
            }
        } catch (error) {
            console.error('ERROR FETCHING PRODUCT BY ID: ', error)
            return null
        }
    }

    function addToCart(product) {
        setCart((prevCart) => [...prevCart, product])
    }

    function getTotalPrice() {
        return cart.reduce((total, product) => total + product.price, 0)
    }

    return (
        <ProductsContext.Provider
            value={{
                getProductById: getProductById,
                cart: cart,
                addToCart: addToCart,
                getTotalPrice: getTotalPrice
            }}>
            { props.children }
        </ProductsContext.Provider>
    )
}
export default ProductsProvider;
