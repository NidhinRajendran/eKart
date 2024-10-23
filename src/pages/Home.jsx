import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItem } from '../Redux/Slice/wishlistslice'
import { addCartItem } from '../Redux/Slice/cartslice'


function Home() {
  const data=useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()

  
  
  return (
    <div className='pt-40 md:px-20 md:grid grid-cols-4'>
     {data?.length>0 &&
     data?.map((item)=>(
      <div className='p-2'>
        <div className='p-3 rounded shadow-xl'>
          <img src={item?.image} alt="no image" className='w-full h-60' />
          <h2 className='text-2xl'>{item?.title.slice(0,20)}...</h2>
          <p className='text-justify'>{item?.description.slice(0,65)}...</p>
          <h6 className='mt-3'>Price : $<span className='text-blue-700'>{item?.price}</span></h6>

          <div className='flex justify-between mt-3'>
            <button onClick={()=>dispatch(addWishlistItem(item))}><FontAwesomeIcon icon={faHeart} className='p-3 rounded bg-red-600 text-white'/></button>
            <button onClick={()=>dispatch(addCartItem(item))}><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
          
          </div>
          </div>
      </div>
     )) 
    }

      

      
      

    </div>
  )
}

export default Home