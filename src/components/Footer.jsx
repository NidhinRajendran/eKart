import { faFacebook, faInstagram, faXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <div className='min-h-80 bg-blue-700 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div className=' text-white' >
            <div className='flex items-center ms-3'>
                <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
                <h2 className='fa-2x ms-3'>E-Kart</h2>
            </div>
            <p className='mt-2 ms-5' style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adip isicing elit. Fugiat dol ores ea. Mafgt hitr sjafu hbgjs. s</p>
        </div>
        <div className='justify-self-center  text-white'>
            <h2 className='fa-2x ms-5'>LINKS</h2>
            <ul className='list-none'>
                <Link to={'/'}><li className=' mt-2 ms-5 mb-2'>Home</li></Link>
                <Link to={'/cart'}><li className='ms-5 mb-2'>Cart</li></Link>
                <Link to={'/wishlist'}><li className='ms-5 '>Wishlist</li></Link>
            </ul>
        </div>
        <div className='justify-self-center  text-white'>
            <h2 className='fa-2x ms-5 '>GUIDES</h2>
            <ul className='list-none'>
                <li className=' mt-2 ms-5 mb-2'>React</li>
                <li className='ms-5 mb-2'>Redux</li>
                <li className='ms-5 '>Tailwind</li>
            </ul>
        </div>
        <div className='justify-self-center  text-white' >
            <h2 className='fa-2x ms-5 '>CONTACT US</h2>
            <input  type="text" placeholder='Enter you email id' className='mt-2 text-black py-2 focus:ring-0 rounded-e-xlfocus:ring-2 focus:ring-inset ms-5 focus:ring-indigo-600 rounded-md ' />
            <button className='bg-red-600 rounded-md px-3 py-2 ms-5 border mt-md mt-3 border-black'>SUBSCRIBE</button>
            <div className='ms-5 flex justify-between mt-3'>
            <FontAwesomeIcon icon={faXTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faYoutube} className='fa-2x'/>
            </div>
        </div>

    </div>
  )
}

export default Footer

