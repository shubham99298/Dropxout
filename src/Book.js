import React from 'react'
import './Book.css'

const Book = (props) => {

    const {image,title,author,price}=props;


  return (
    <div className='book'>

       <div className='bookimg'>
       <img src={image} alt=''/>

       </div>
       <div className='Bookinfo'>
          <h2>{title}</h2>
         <p className='author'>{author}</p>
         <p className='price'>{price}</p>
         <button>Add to cart</button>
       </div>

    </div>
  )
}

export default Book



