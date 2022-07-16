import React from 'react'
import Product from '../product/Product'
import '../../css/products/Products.css'
import useFetch from '../useFetch'
import { Bars } from 'react-loader-spinner'

export default function Products() {

    const url = 'https://fakestoreapi.com/products'   //// all products endpoint.

    /////// fetching all the products.
    const [products] = useFetch(url)

    return (
        <div className='products'>
            {
                ///// showing loader until the products are fetched.
                products.length === 0 ?
                    <div className='loader'>
                        <Bars color="grey" height={80} width={80} />
                    </div> :
                    //////// map through every product. 
                    products.map(product => <Product key={product.id} product={product} />)
            }
        </div>
    )
}
