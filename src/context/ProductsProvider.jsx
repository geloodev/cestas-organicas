import React from 'react'

export const ProductsContext = React.createContext()

function ProductsProvider(props) {
    return (
        <ProductsContext.Provider>
            { props.children }
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;
