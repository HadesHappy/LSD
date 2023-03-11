import React from 'react'

const SelectToken = ({setIsModalVisible}) => {
  return (
    <div className="modal-window__wrapper modal-window__wrapper--select-token">
      <header className="modal-window__header">
        <h2>Select token</h2>
        <button className="modal-window__close" onClick={() => setIsModalVisible(false)}></button>
      </header>
      <ul className="select-token__search-result">
        <li className="select-token__search-result-item">
          <img src="img/coins/eth.png" alt='eth'/>
          <p className="token__info">
            <b className="token__info-name">Ethereum</b>
            <span className="token__info-abbr">ETH</span>
          </p>
          <b className="token__info-amount">1,250.70</b>
        </li>
        <li className="select-token__search-result-item">
          <img src="img/coins/lseth.png" alt='lseth'/>
          <p className="token__info">
            <b className="token__info-name">LS-Eth</b>
            <span className="token__info-abbr">lsETH</span>
          </p>
          <b className="token__info-amount">300.0015</b>
        </li>
      </ul>
    </div>
  )
}

export default SelectToken;
