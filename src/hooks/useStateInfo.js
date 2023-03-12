import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const useStateInfo = () => {
  const inputToken = useSelector(state => state.inputReducer.inputToken)
  const outputToken = useSelector(state => state.inputReducer.outputToken)
  const stakeType = useSelector(state => state.inputReducer.stakeType)
  const trigger = useSelector(state => state.inputReducer.trigger)

  return { inputToken, outputToken, stakeType, trigger }
}