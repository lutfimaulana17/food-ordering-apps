"use client"

import { ProductType } from '@/types/types'
import React, { useEffect, useState } from 'react'

const Price = ({ product }: {product: ProductType}) => {
  const { price, options } = product 
  const [total, setTotal] = useState(price)
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)  

  useEffect(() => {
    if (options?.length) {
        setTotal(quantity * price + options[selected].additionalPrice)
    }
  }, [quantity, selected, options, price])

  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${total}</h2>
        <div className='flex gap-4'>
            { options?.length && options?.map((option, index) => (
                <button 
                    key={option.title} 
                    className='p-2 ring-1 ring-red-400 rounded-md min-w-[6rem]'
                    style={{
                        background: selected === index ? "rgb(248 113 113)" : "white",
                        color: selected === index ? "white" : "red"
                    }}
                    onClick={() => setSelected(index)}
                    >
                    {option.title}
                </button>
            ))}
        </div>
        <div className='flex justify-between items-center'>
             <div className='flex justify-between w-full p-3 ring-1 ring-red-500'>
                <span>Quantity</span>
                <div className='flex gap-4 items-center'>
                    <button onClick={() => setQuantity(prev=> prev > 1 ? prev - 1 : 1)}>{'<'}</button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(prev=> prev < 9 ? prev + 1 : 9)}>{'>'}</button>
                </div>
             </div>   
             <button className='uppercase bg-red-500 text-white p-3 ring-1 ring-red-500 w-56'>Add to Cart</button>
        </div>
    </div>
  )
}

export default Price