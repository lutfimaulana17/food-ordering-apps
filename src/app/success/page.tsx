"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import getBaseUrl from '@/helper/getBaseUrl'

const SuccessPage = () => {
  const searchParams = useSearchParams()
  const payment_intent = searchParams.get("payment_intent")
  const router = useRouter()

  useEffect(() => {
    const hostApi = getBaseUrl()
    const getConfirmPayment = async () => {
      try {
        await fetch(`${hostApi}/api/confirm/${payment_intent}`, {
          method: 'POST'
        })
        setTimeout(() => {
          router.push('/orders')
        }, 5000);
      } catch (error) {
        console.log(error)
      }
    }

    getConfirmPayment()
  }, [payment_intent, router])

  return (
    <div>
      Payment successful. You are being redirected to the orders page. Please do not close the page.
    </div>
  )
}

export default SuccessPage