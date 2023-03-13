import { useEffect, useState } from 'react'
import axios from 'axios'
import { useStateInfo } from './useStateInfo'
import CoinGecko from 'coingecko-api'

export const usePrice = () => {
  const [ethPrice, setEthPrice] = useState()
  const { inputValue, outputValue } = useStateInfo()
  const CoinGeckoClient = new CoinGecko()

  useEffect(async() => {
    axios.get("https://api.binance.com/api/v3/ticker/price?symbol=ETHBUSD")
      .then((res) => {
        if(res.data){
          setEthPrice(res.data.price)
        }else{
          console.log('no data')
        }
      })
      .catch((error) => {
        console.log(error)
      })

      let data = await CoinGeckoClient.simple.price({
        ids: ['bitcoin', 'ethereum'],
        vs_currencies: 'usd'
      })

      console.log('data: ', data)

  }, [inputValue, outputValue])

  return { ethPrice }
}

