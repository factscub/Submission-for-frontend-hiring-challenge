import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import '../../css/showProduct/ShowProduct.css'
import { Bars } from 'react-loader-spinner'

///// gives detailed info about the product you clicked.
export default function ShowProduct() {
  const { id: Id } = useParams()
  const url = `https://fakestoreapi.com/products/${Id}` ///// single product endpoint

  //// fetching data for a single product.
  const [product] = useFetch(url)

  const { category, description, image, price, title, rating } = product
  const { rate, count } = rating || {}

  return (
    <div className='outer-container'>
      {
        ///// showing loader until the product is fetched.
        product.length === 0 ?
          <div className='loader'>
            <Bars color="grey" height={80} width={80} />
          </div> :
          <div className='inner-container'>
            <div className='image'>
              <img src={image} alt="" />
            </div>
            <div className='text-box'>
              <div className='text-container'>
                <div className="stitle">{title}</div>
                <div className='description'> <div className='desc-title'>Description:</div>
                  <div className='desc-content'>{description}</div>
                </div>
                <div className='category'> <div className='cat-title'>Category:</div>
                  <div className='cat-content'>{category}</div>
                </div>
                <div className='rating-count'>
                  <div className='rating'><span>{rate} &#9733;</span></div>
                  <div className='count'><span>({count})</span></div>
                </div>
                <div>
                </div>
                <div className='price'>
                  <p>${price}</p>
                </div>
              </div>
            </div>
          </div>
      }

    </div>

  )
}
