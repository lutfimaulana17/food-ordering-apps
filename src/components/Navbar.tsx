import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {
  const user = false
  return (
    <div className='h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase md:h-24'>
      <div className='hidden md:flex gap-4 flex-1'>
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className='text-xl md:font-bold flex-1 md:text-center'>
        <Link href="/">Foodster</Link>
      </div>
      <div className='md:hidden'>
        <Menu />
      </div>
      <div className='hidden md:flex gap-4 items-center flex-1'>
        <div className='flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md'>
          <Image src="/phone.png" alt="" width={20} height={20} />
          <span>+62123</span>
        </div>
        { !user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        ) }
        <Link href="/cart">
          <CartIcon />
        </Link>
      </div>
    </div>
  )
}

export default Navbar