import React from 'react'

const ProductDetail = ({match,products}) => {
    console.log(match)
    console.log(products)
    const product = products.find(el =>el.id.toString() === match.params.id)
    return (
        <div>
            { 
            product.price}
        </div>
    )
}

export default ProductDetail
