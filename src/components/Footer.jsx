import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Footer() {
  return (
    <div className='min-h-80 bg-yellow-400 p-10 w-100 md:grid md:grid-cols-[repeat(1,2fr)_repeat(2,1fr)_repeat(1,2fr)]'>
        <div >
            <div className='flex items-center'>
                <FontAwesomeIcon icon={faCartShopping} className='fa-2x'/>
                <h2 className='fa-2x ms-3'>E-Kart</h2>
            </div>
            <p className='mt-2' style={{textAlign:'justify'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolores ea. Mafgt hitr sjafu hbgjs. Traughn hksadjgy hqwvhbfA Mnjjnjef dnfmcns</p>
        </div>
        <div className='justify-self-center'>
            <h2 className='fa-2x ms-5'>LINKS</h2>
            <ul className='list-none'>
                <Link to={'/'}><li className=' mt-2 ms-5 mb-2'>Home</li></Link>
                <Link to={'/cart'}><li className='ms-5 mb-2'>Cart</li></Link>
                <Link to={'/wishlist'}><li className='ms-5 '>Wishlist</li></Link>
            </ul>
        </div>
        <div className='justify-self-center'>
            <h2 className='fa-2x ms-5'>GUIDES</h2>
            <ul className='list-none'>
                <li className=' mt-2 ms-5 mb-2'>React</li>
                <li className='ms-5 mb-2'>Redux</li>
                <li className='ms-5 '>Tailwind</li>
            </ul>
        </div>
        <div className='justify-self-center' >
            <h2 className='fa-2x ms-5'>CONTACT US</h2>
            <input style={{width:'100%',height:'30px'}} type="text" className='mt-2 focus:ring-0 rounded-e-xlfocus:ring-2 focus:ring-inset ms-5 focus:ring-indigo-600 rounded-md ' />
        </div>

    </div>
  )
}

export default Footer

