import React from 'react'

const DappSectionInfo = () => {
  return (
    <div className="dapp-section__info">
      <p className="dapp-section__min">
        Min deposit ETH
        <span>5.000264</span>
      </p>
      <div className="dapp-section__info-list">
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Exchange rate</li>
          <li className="dapp-section__info-numbers">1 ETH = 0.99252 LS-ETH</li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
          </li>
        </ul>
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Average Return</li>
          <li className="dapp-section__info-numbers">
            <span className="green">≈ 5.42%</span> APR
          </li>
          <li className="dapp-section__info-tip">
            <button className="dapp-section__info-button">Info</button>
          </li>
        </ul>
        <ul className="dapp-section__info-item">
          <li className="dapp-section__info-item-name">Transaction cost</li>
          <li className="dapp-section__info-numbers">0.01320 ETH (≈$64.50 USD) / 36 gwei</li>
          <li className="dapp-section__info-tip">
            <span className="dapp-section__info-cost">Low</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default DappSectionInfo;
