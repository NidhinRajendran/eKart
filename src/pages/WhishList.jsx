import React from 'react'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { removeWishlistItem } from '../Redux/Slice/wishlistslice'
import { addCartItem } from '../Redux/Slice/cartslice'



function WhishList() {
  const wishlistArray = useSelector((state)=>state.wishlist)
  console.log(wishlistArray);
  const dispatch = useDispatch()
  const wishes =(item)=>{
    dispatch(removeWishlistItem(item?.id))
    dispatch(addCartItem(item))
  }
  
  return (
    <>
    <h2 className='text-black text-center pt-32 text-3xl'>Wish List</h2>

    
      {wishlistArray?.length>0?
      <div className='md:px-20 md:grid grid-cols-4'>
        {wishlistArray?.map((item)=>(
          <div className='p-2'>
          <div className='p-3 rounded shadow-xl'>
            <img src={item?.image} alt="no image" className='w-full h-60' />
            <h2 className='text-2xl'>{item?.title.slice(0,20)}...</h2>
            <p className='text-justify'>{item?.description.slice(0,65)}...</p>
            <h6 className='mt-3'>Price : $<span className='text-blue-700'>{item?.price}</span></h6>
  
            <div className='flex justify-between mt-3'>
              <button onClick={()=>dispatch(removeWishlistItem(item?.id))}><FontAwesomeIcon icon={faTrash}  className='p-3 rounded bg-red-600 text-white'/></button>
              <button onClick={()=>wishes(item)}><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
            
            </div>
            </div>
        </div>))
        }
        
  
        
        
  
      </div>

      :

      <div className='flex justify-center mt-5'>
        <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?rs=1&pid=ImgDetMain" alt="ni image" />
      </div>}
    </>
  )
}

export default WhishList