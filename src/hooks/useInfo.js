import { getOwnerContract } from "../contracts"
import { useState, useEffect } from 'react'

export const useInfo = () => {
  const [apr, setApr] = useState()
  const [lidoApr, setLidoApr] = useState()
  const [rpApr, setRpApr] = useState()
  const [swiseApr, setSwiseApr] = useState()
  const [minimum, setMinimum] = useState()
  const [enabled, setEnabled] = useState()
  const [multiplier, setMultiplier] = useState()
  const [owner, setOwner] = useState()
  const [isLock, setIsLock] = useState()

  const setInfos = async () => {
    try {
      const { apr, rpApr, lidoApr, swiseApr, multiplier, depositEnabled, isLock, minimumAmount, owner } = await getOwnerContract()
      setApr(apr)
      setRpApr(rpApr)
      setLidoApr(lidoApr)
      setSwiseApr(swiseApr)
      setMinimum(minimumAmount)
      setEnabled(depositEnabled)
      setIsLock(isLock)
      setMultiplier(multiplier)
      setOwner(owner)

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setInfos()
  }, [])

  return { apr, rpApr, lidoApr, swiseApr, minimum, enabled, multiplier, owner, isLock }
}