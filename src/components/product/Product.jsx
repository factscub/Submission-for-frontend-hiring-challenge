import React from 'react'
import '../../css/product/Product.css'

//// single product in the list of products.
export default function Product({ product }) {

    const { title, id, image, rating: { rate, count }, price } = product

    ///// open a new tab whenever the product is clicked.
    const pageShifter = (id) => {
        window.open(`product/${id}`, '_blank', 'noopener,noreferrer')

    }
    return (
        <div className='product' onClick={() => pageShifter(id)}>
            <div className="thumbnail">
                <img src={image} alt="" />
            </div>
            <div className="title">{title}</div>
            <div className='rating-count'>
                <div className='rating'><span>{rate} &#9733;</span></div>
                <div className='count'><span>({count})</span></div>
            </div>
            <div className='price'>
                <p>${price}</p>
            </div>
        </div>
    )
}
