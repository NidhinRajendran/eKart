import React from 'react'
import { faCartShopping, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function WhishList() {
  return (
    <>
    <h2 className='text-black text-center pt-32 text-3xl'>Wish List</h2>
      <div className='md:px-20 md:grid grid-cols-4'>
        <div className='p-2'>
          <div className='p-3 rounded shadow-xl'>
            <img src="https://th.bing.com/th/id/OIP.gSKUDJVgs7yv-ehsnIISpQHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="no image" className='w-full h-70' />
            <h2 className='text-2xl'>Shirt</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe modi magni optio dolorum. Nemo, commodi.</p>
            <h6 className='mt-3'>Price : <span className='text-blue-700'>$ 10</span></h6>
  
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon icon={faTrash}  className='p-3 rounded bg-red-600 text-white'/></button>
              <button><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
            
            </div>
            </div>
        </div>
  
        <div className='p-2'>
          <div className='p-3 rounded shadow-xl'>
            <img src="https://th.bing.com/th/id/OIP.gSKUDJVgs7yv-ehsnIISpQHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="no image" className='w-full h-70' />
            <h2 className='text-2xl'>Shirt</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe modi magni optio dolorum. Nemo, commodi.</p>
            <h6 className='mt-3'>Price : <span className='text-blue-700'>$ 10</span></h6>
  
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon icon={faHeart} className='p-3 rounded bg-red-600 text-white'/></button>
              <button><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
            
            </div>
            </div>
        </div>
  
  
        <div className='p-2'>
          <div className='p-3 rounded shadow-xl'>
            <img src="https://th.bing.com/th/id/OIP.gSKUDJVgs7yv-ehsnIISpQHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="no image" className='w-full h-70' />
            <h2 className='text-2xl'>Shirt</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe modi magni optio dolorum. Nemo, commodi.</p>
            <h6 className='mt-3'>Price : <span className='text-blue-700'>$ 10</span></h6>
  
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon icon={faHeart} className='p-3 rounded bg-red-600 text-white'/></button>
              <button><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
            
            </div>
            </div>
        </div>
  
  
        <div className='p-2'>
          <div className='p-3 rounded shadow-xl'>
            <img src="https://th.bing.com/th/id/OIP.gSKUDJVgs7yv-ehsnIISpQHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="no image" className='w-full h-70' />
            <h2 className='text-2xl'>Shirt</h2>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea saepe modi magni optio dolorum. Nemo, commodi.</p>
            <h6 className='mt-3'>Price : <span className='text-blue-700'>$ 10</span></h6>
  
            <div className='flex justify-between mt-3'>
              <button><FontAwesomeIcon icon={faHeart} className='p-3 rounded bg-red-600 text-white'/></button>
              <button><FontAwesomeIcon icon={faCartShopping} className='p-3 rounded bg-green-600 text-white'/></button>
            
            </div>
            </div>
        </div>
        
  
      </div>

      <div className='flex justify-center mt-5'>
        <img src="https://th.bing.com/th/id/OIP.gn99fIyj918A9IUVwOiCagAAAA?rs=1&pid=ImgDetMain" alt="ni image" />
      </div>
    </>
  )
}

export default WhishList