import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row'>
      <div className='h-1/2 p-4 flex flex-col justify-center overflow-scroll lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40'>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$56.67</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$56.67</h2>
          <span className='cursor-pointer'>X</span>
        </div>
        <div className='flex items-center justify-between mb-4'>
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className=''>
            <h1 className='uppercase text-xl font-bold'>Sicilian</h1>
            <span>Large</span>
          </div>
          <h2 className='font-bold'>$56.67</h2>
          <span className='cursor-pointer'>X</span>
        </div>
      </div>
      <div className='flex flex-col gap-4 justify-center h-1/2 p-4 bg-fuchsia-50 lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6'>
        <div className='flex justify-between'>
          <span className=''>Subtotal (7 items)</span>
          <span className=''>$60.44</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Service Cost</span>
          <span className=''>$0.00</span>
        </div>
        <div className='flex justify-between'>
          <span className=''>Delivery Cost</span>
          <span className='text-green-500'>FREE</span>
        </div>
        <hr className='my-2' />
        <div className='flex justify-between'>
          <span className=''>TOTAL(INCL. VAT)</span>
          <span className='font-bold'>$60.44</span>
        </div>
        <button className='bg-red-500 w-1/2 text-white p-3 rounded-md self-end'>CHECKOUT</button>
      </div>
    </div>
  )
}

export default CartPage