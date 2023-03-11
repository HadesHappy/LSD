import { useEffect, useState } from 'react'
import axios from 'axios'

export const usePrice = () => {
  const [ethPrice, setEthPrice] = useState()

  useEffect(() => {
    axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHBUSD")
      .then((res) => {
        setEthPrice(res.data?.price)
      })
      .catch((error) => {
        console.log(error)
      })
  })

  return { ethPrice }
}

