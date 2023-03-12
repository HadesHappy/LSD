import React, { useState, useEffect } from 'react'
import { useBalance } from '@thirdweb-dev/react'
import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk'
import { showBalance, showPrice, showRate } from '../utils/common'
import { INPUT_CHANGE, OUTPUT_CHANGE, TRIGGER } from '../store/constants'
import { useDispatch, useSelector } from 'react-redux'
import { usePrice } from '../hooks/usePrice'
import { useExchangeRate } from '../hooks/useExchangeRate'
import { useStateInfo } from '../hooks/useStateInfo'

import DappDisplayToken from './DappDisplayToken'

const DappSectionWithdraw = ({ setIsModalVisible }) => {
  const { inputToken, outputToken, stakeType } = useStateInfo()

  const exchangeRate = useExchangeRate()

  const { data, isLoading } = useBalance(NATIVE_TOKEN_ADDRESS)
  const [amount, setAmount] = useState(0)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setAmount(e.target.value)
    dispatch({ type: INPUT_CHANGE, payload: e.target.value })
    dispatch({ type: OUTPUT_CHANGE, payload: e.target.value * exchangeRate })
  }

  const handleClick = () => {
    setIsModalVisible(true)
    dispatch({ type: TRIGGER, payload: 'INPUT' })
  }

  return (
    <div className="dapp-section__withdraw">
      <header className="dapp-section__withdraw-header">
        <p className="dapp-section__withdraw-title">Stake {inputToken}</p>
        <p className="dapp-section__withdraw-balance">
          Balance: <span>{showBalance(data?.displayValue)} ETH</span>
        </p>
        <button className="dapp-section__withdraw-max">Max</button>
      </header>
      <div className="dapp-section__withdraw-actions">
        <input type="number" placeholder="0,000.000000" value={amount} onChange={handleChange} />
        <div className="dapp-section__withdraw-currency">
          <button
            className="dapp-section__withdraw-currency-select currency-select"
            onClick={handleClick}
          >
            <DappDisplayToken token={inputToken} />
          </button>
        </div>
      </div>
      <p className="dapp-section__withdraw-count">$1,265,537.00</p>
    </div>
  )
}

export default DappSectionWithdraw;
