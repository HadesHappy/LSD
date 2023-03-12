import React, { useState, useEffect } from 'react'
import DappSectionInfo from './DappSectionInfo'
import { useDispatch, useSelector } from 'react-redux'
import { OUTPUT_CHANGE, TRIGGER, INPUTTOKEN, OUTPUTTOKEN, STAKE_TYPE, INPUT_CHANGE } from '../store/constants'
import { usePrice } from '../hooks/usePrice'
import { showBalance, showPrice } from '../utils/common'
import { useExchangeRate } from '../hooks/useExchangeRate'
import { useStateInfo } from '../hooks/useStateInfo'

import DappDisplayToken from './DappDisplayToken'

const DappSectionReceive = ({ setIsModalVisible }) => {
  const dispatch = useDispatch()
  
  const { inputToken, outputToken, stakeType} = useStateInfo()
  const exchangeRate = useExchangeRate()

  const [amount, setAmount] = useState(0)

  const handleChange = (e) => {
    setAmount(e.target.value)
    dispatch({ type: OUTPUT_CHANGE, payload: e.target.value })
  }

  const handleClick = () => {
    setIsModalVisible(true)
    dispatch({ type: TRIGGER, payload: 'OUTPUT' })
  }

  const handleSwitchClick = () => {
    if (stakeType === 'STAKE') {
      dispatch({ type: STAKE_TYPE, payload: 'UNSTAKE' })
    }
    else {
      dispatch({ type: STAKE_TYPE, payload: 'STAKE' })
    }

    const token = inputToken
    dispatch({ type: INPUTTOKEN, payload: outputToken })
    dispatch({ type: OUTPUTTOKEN, payload: token })

    dispatch({ type: OUTPUT_CHANGE, payload: 0 })
    dispatch({ type: INPUT_CHANGE, payload: 0 })
  }

  return (
    <div className="dapp-section__receive">
      <button className="dapp-section__receive-swap" onClick={handleSwitchClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8" stroke="#AFAFAF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <header className="dapp-section__receive-header">
        <p className="dapp-section__receive-title">Receive {outputToken}</p>
        <p className="dapp-section__receive-balance">
          Balance: <span>10,364.0 {outputToken}</span>
        </p>
        <button className="dapp-section__receive-lock">Lock</button>
      </header>
      <div className="dapp-section__receive-actions">
        <input type="number" placeholder="0,000.000000" value={amount} onChange={handleChange} />
        <div className="dapp-section__receive-currency">
          <button
            className="dapp-section__receive-currency-select currency-select"
            onClick={handleClick}
          >
            <DappDisplayToken token={outputToken} />
          </button>
        </div>
      </div>
      <p className="dapp-section__receive-count">$1,264,300.00</p>
      <DappSectionInfo />
    </div>
  )
}

export default DappSectionReceive
