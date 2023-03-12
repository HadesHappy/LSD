import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useLsdBalance } from './useLsdBalance'
import { useStateInfo } from './useStateInfo'

export const useExchangeRate = () => {
  const { inputToken, outputToken, stakeType } = useStateInfo()

  const [exchangeRate, setExchangeRate] = useState(1)
  const { rate } = useLsdBalance()

  useEffect(() => {
    if (stakeType === 'STAKE') {
      if (inputToken === 'ETH') {
        setExchangeRate(rate)
      }
      else {
        setExchangeRate(1)
      }
    } else {
      if (inputToken === 'LS-ETH')
        setExchangeRate(1 / rate)
      else
        setExchangeRate(1)
    }
  }, [stakeType, inputToken])

  return exchangeRate
}