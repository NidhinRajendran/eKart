import { faBars, faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'





function Header() {

  const [show,setShow]=useState(false)
  const change =() =>{
    setShow(!show)
  }
  return (
    <div className='min-h-20 bg-blue-700 p-5 w-full fixed '>
      <div className='flex justify-between'>
        <div className='text-white flex items-center' >
          <FontAwesomeIcon icon={faCartShopping} className='fa-2x' />
          <h2 className='fa-2x ms-3 '>E-Kart</h2>
        </div>
        <button className='border border-white p-1 rounded ms-2 md:hidden' onClick={change}><FontAwesomeIcon icon={faBars} className='fa-2x text-white' /></button>

       

         <div className='md:flex hidden '>
          <div className='border border-white rounded-md me-3 p-3 hover:bg-white'>
            <button className='text-white  hover:text-black'><FontAwesomeIcon icon={faHeart} className='me-3 text-red-600'/>Wishlist <span className='bg-white text-black rounded px-1'>0</span></button>
          </div>
          <div className='border border-white rounded-md p-3 hover:bg-white'>
            <button className='text-white  hover:text-black'><FontAwesomeIcon icon={faCartShopping} className='me-3 text-green-600'/>My Cart <span className='bg-white text-black rounded px-1'>0</span></button>
          </div>
        </div> 
  
      </div>
      {show && <div className=' md:hidden  flex my-3'>
          <div className='border border-white rounded-md me-3 p-3 hover:bg-white'>
            <button className='text-white  hover:text-black'><FontAwesomeIcon icon={faHeart} className='me-3 text-red-600'/>Wishlist <span className='bg-white text-black rounded px-1'>0</span></button>
          </div>
          <div className='border border-white rounded-md p-3 hover:bg-white'>
            <button className='text-white  hover:text-black'><FontAwesomeIcon icon={faCartShopping} className='me-3 text-green-600'/>My Cart <span className='bg-white text-black rounded px-1'>0</span></button>
          </div>
        </div>} 

    </div>
  )
}

export default Header