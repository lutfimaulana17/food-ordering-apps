"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import getBaseUrl from '@/helper/getBaseUrl'

type Inputs = {
    title: string;
    desc: string;
    price: number;
    catSlug: string;
}

type Option = {
    title: string;
    additionalPrice: number;
}

const AddPage = () => {
  const { data:session, status } = useSession()
  const [inputs, setInputs] = useState<Inputs>({
    title: '',
    desc: '',
    price: 0,
    catSlug: ''
  })

  const [option, setOption] = useState<Option>({
    title: '',
    additionalPrice: 0
  })

  const [options, setOptions] = useState<Option[]>([])
  
  const router = useRouter()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (status === "unauthenticated" || !session?.user.isAdmin) {
    router.push('/')
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputs(prev=>{
        return {...prev, [e.target.name]: e.target.value}
    })
  }

  const changeOption = (e:React.ChangeEvent<HTMLInputElement>) => {
    setOption(prev=>{
        return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
        const hostApi = getBaseUrl()
        const res = await fetch(`${hostApi}/api/products`, {
            method: 'POST',
            body: JSON.stringify({
                ...inputs,
                options
            })
        })

        const data = await res.json()
        router.push(`/product/${data.id}`)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <div>
        <form className='shadow-lg flex flex-wrap gap-4 p-8' onSubmit={handleSubmit}>
            <h1>Add New Product</h1>
            <div className='w-full flex flex-col gap-2'>
                <label>Title</label>
                <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type="text" name="title" />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label>Desc</label>
                <textarea className='ring-1 ring-red-200 p-2 rounded-sm' name="desc" />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label>Price</label>
                <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type="number" name="price" />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label>Category</label>
                <input onChange={handleChange} className='ring-1 ring-red-200 p-2 rounded-sm' type="text" name="category" />
            </div>
            <div className='w-full flex flex-col gap-2'>
                <label>Options</label>
                <div>
                    <input onChange={changeOption} className='ring-1 ring-red-200 p-2 rounded-sm' type="text" placeholder="Title" name="title" />
                    <input onChange={changeOption} className='ring-1 ring-red-200 p-2 rounded-sm' type="number" placeholder="Additional Price" name="additionalPrice" />
                </div>
                <div onClick={() => setOptions(prev=>[...prev, option])} className='w-52 bg-red-500 text-white p-2'>Add Option</div>
            </div>
            <div>
                { options.map(item => (
                    <div className='ring-1 p-2 ring-red-500 rounded-md cursor-pointer' key={item.title} onClick={() => setOptions(options.filter((opt) => opt.title !== item.title))}>
                        <span>{item.title}</span>
                        <span>${item.additionalPrice}</span>
                    </div>
                )) }
            </div>
            <button type='submit' className='p-2 w-full bg-red-500 text-white'>Submit</button>
        </form>
    </div>
  )
}

export default AddPage