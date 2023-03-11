import React from 'react'

const DappSectionWithdraw = ({setIsModalVisible}) => {
  return (
    <div className="dapp-section__withdraw">
      <header className="dapp-section__withdraw-header">
        <p className="dapp-section__withdraw-title">Stake ETH</p>
        <p className="dapp-section__withdraw-balance">
          Balance: <span>2,850.30 ETH</span>
        </p>
        <button className="dapp-section__withdraw-max">Max</button>
      </header>
      <div className="dapp-section__withdraw-actions">
        <input type="text" placeholder="0,000.000000" />
        <div className="dapp-section__withdraw-currency">
          <button
            className="dapp-section__withdraw-currency-select currency-select"
            onClick={() => setIsModalVisible(true)}
          >
            <img src="img/coins/eth.png" />
            <span>ETH</span>
          </button>
        </div>
      </div>
      <p className="dapp-section__withdraw-count">$1,265,537.00</p>
    </div>
  )
}

export default DappSectionWithdraw;
