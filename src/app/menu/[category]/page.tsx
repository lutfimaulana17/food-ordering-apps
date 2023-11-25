import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import getBaseUrl from '@/helper/getBaseUrl'
import { ProductType } from '@/types/types'

const getData = async (category: string) => {
  const hostApi = getBaseUrl()
  const res = await fetch(`${hostApi}/api/products?cat=${category}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed!")
  }

  return res.json()
}

type Props = {
  params: { category: string }
}

const CategoryPage = async ({params}: Props) => {
  const products:ProductType[] = await getData(params.category)
  return (
    <div className='flex flex-wrap text-red-500'>
      {products.map(item => (
        <Link className='w-full h-[60vh] border-r-2 border-b-2 border-red-500 sm:w-1/2 lg:w-1/3 p-4 flex flex-col justify-between group even:bg-fuchsia-50' href={`/product/${item.id}`} key={item.id}>
          {item.img && (
            <div className='relative h-[80%]'>
                <Image src={item.img} alt="" fill className='object-container' />
            </div>
          )}
          <div className='flex items-center justify-between font-bold'>
            <h1 className='text-2xl uppercase p-2'>{item.title}</h1>
            <h2 className='text-xl group-hover:hidden'>${item.price}</h2>
            <button className='uppercase bg-red-500 text-white p-2 rounded-md hidden group-hover:block'>Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CategoryPage