import React from 'react'
import { useInfo } from '../hooks/useInfo'
import { useExchangeRate } from '../hooks/useExchangeRate'
import { showBalance, showRate } from '../utils/common'
import { useSelector } from 'react-redux'

const DappSectionInfo = () => {
  const exchangeRate = useExchangeRate()
  const inputToken = useSelector(state => state.inputReducer.inputToken)
  const outputToken = useSelector(state => state.inputReducer.outputToken)

  const { apr, minimum } = useInfo()

  return (
    <div className="dapp-section__info">
      <p className="dapp-section__min">
        Min deposit ETH
        <span>{showBalance(minimum)}</span>
      </p>
      <div className="dapp-section__info-list">
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Exchange rate</li>
          <li className="dapp-section__info-numbers">1 {inputToken} = {showRate(exchangeRate)} {outputToken} </li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
          </li>
        </ul>
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Average Return</li>
          <li className="dapp-section__info-numbers">
            <span className="green">≈ {showRate(apr)}%</span> APR
          </li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
          </li>
        </ul>
        {/* <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Transaction cost</li>
          <li className="dapp-section__info-numbers">0.01320 ETH (≈$64.50 USD) / 36 gwei</li>
          <li className="dapp-section__info-tip">
            <span className="dapp-section__info-cost">Low</span>
          </li>
        </ul> */}
      </div>
    </div>
  )
}

export default DappSectionInfo;
