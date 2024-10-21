import { faBackward, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'



function Cart() {
  return (
    <>
    <h2 className='text-black text-center pt-32 text-3xl'> Cart</h2>
    <div className='md:grid grid-cols-[2fr_1fr] my-10'>
      <div className='p-3'>
        <table className='w-full border border-gray-500'>
          <thead>
            <tr>
              <th className='border border-gray-500 p-3 bg-gray-400 '>#</th>
              <th className='border border-gray-500 p-3 bg-gray-400 '>Title</th>
              <th className='border border-gray-500 p-3 bg-gray-400 '>Image</th>
              <th className='border border-gray-500 p-3 bg-gray-400 '>Price</th>
              <th className='border border-gray-500 p-3 bg-gray-400 '>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className='border border-gray-500 p-3 '>1</td>
              <td className='border border-gray-500 p-3 '>dummy</td>
              <td className='border border-gray-500 flex justify-center p-3 '><img src="https://th.bing.com/th/id/OIP.gSKUDJVgs7yv-ehsnIISpQHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="no image" style={{width:'100px',height:'100px'}} /></td>
              <td className='border border-gray-500 p-3 '>dummy</td>
              <td className='border border-gray-500 p-3 text-center'><button className='bg-red-600 text-white p-3 rounded'><FontAwesomeIcon icon={faTrash} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='pt-5 px-10'>
        <div className='p-3 shadow-2xl'>
          <h1 className='2xl font-semibold text-center'>Cart Summary</h1>
          <h1 className='mt-3'>Total Number of Products : <span>3</span></h1>
          <h1>Grand Total : <span>50</span></h1>
          <button className='bg-green-500 px-3 py-2 rounded border border-green-500 text-white mt-3 w-full hover:bg-white hover:border hover:border-green-500 hover:text-green-500'>Proceed to checkout</button>
        </div>
      </div>
    </div>

    <div className='w-full md:grid grid-cols-3'>
      <div></div>
        <div className='flex justify-center items-center flex-col my-10'>
          <img src="https://img.freepik.com/premium-vector/shopping-cart-with-cross-mark-wireless-paymant-icon-shopping-bag-failure-paymant-sign-online-shopping-vector_662353-912.jpg" alt="no image" className='w-full h-80'/>

          <Link to={'/'}><button className='bg-green-500 p-3 rounded text-white'><FontAwesomeIcon icon={faBackward} />   Back Home</button></Link>
        </div>
        <div></div>
    </div>
    
    
    </>
  )
}

export default Cart