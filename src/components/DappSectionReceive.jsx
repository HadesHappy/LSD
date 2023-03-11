import React from 'react'
import DappSectionInfo from './DappSectionInfo'

const DappSectionReceive = ({setIsModalVisible}) => {
  return (
    <div className="dapp-section__receive">
      <button className="dapp-section__receive-swap">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17 4V20M17 20L13 16M17 20L21 16M7 20V4M7 4L3 8M7 4L11 8" stroke="#AFAFAF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <header className="dapp-section__receive-header">
        <p className="dapp-section__receive-title">Receive LS-ETH</p>
        <p className="dapp-section__receive-balance">
          Balance: <span>10,364.0 LS-ETH</span>
        </p>
        <button className="dapp-section__receive-lock">Lock</button>
      </header>
      <div className="dapp-section__receive-actions">
        <input type="text" placeholder="0,000.000000" />
        <div className="dapp-section__receive-currency">
          <button
            className="dapp-section__receive-currency-select currency-select"
            onClick={() => setIsModalVisible(true)}
          >
            <img src="img/coins/lseth.png" />
            <span>LSETH</span>
          </button>
        </div>
      </div>
      <p className="dapp-section__receive-count">$1,264,300.00</p>
      <DappSectionInfo />
    </div>
  )
}

export default DappSectionReceive
