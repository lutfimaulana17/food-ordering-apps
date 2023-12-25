"use client"

import { useEffect, useState } from "react"
import getBaseUrl from '@/helper/getBaseUrl'
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "@/components/CheckoutForm";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const PayPage = ({params}: { params: { id: string } }) => {
  const { id } = params
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    const getClientSecret = async () => {
      try {
        const hostApi = getBaseUrl()
        const res = await fetch(`${hostApi}/api/create-intent/${id}`, {
          method: 'POST'
        })
        const data = await res.json()
        setClientSecret(data.clientSecret)
      } catch (error) {
        console.log(error)
      }
    }

    getClientSecret()
  }, [id])

  const options:StripeElementsOptions = {
    clientSecret,
    appearance:{
      theme:"stripe"
    }
  }

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default PayPage