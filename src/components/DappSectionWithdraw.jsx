import React, {useState} from 'react'
import { useBalance } from '@thirdweb-dev/react'
import { NATIVE_TOKEN_ADDRESS } from '@thirdweb-dev/sdk'
import { showBalance } from '../utils/common'

const DappSectionWithdraw = ({setIsModalVisible}) => {
  const { data, isLoading } = useBalance(NATIVE_TOKEN_ADDRESS)
  const [amount, setAmount] = useState(0)

  const handleChange = (e) => {
    setAmount(e.target.value)

  }
  return (
    <div className="dapp-section__withdraw">
      <header className="dapp-section__withdraw-header">
        <p className="dapp-section__withdraw-title">Stake ETH</p>
        <p className="dapp-section__withdraw-balance">
          Balance: <span>{showBalance(data?.displayValue)} ETH</span>
        </p>
        <button className="dapp-section__withdraw-max">Max</button>
      </header>
      <div className="dapp-section__withdraw-actions">
        <input type="number" placeholder="0,000.000000" value={amount} onChange={handleChange}/>
        <div className="dapp-section__withdraw-currency">
          <button
            className="dapp-section__withdraw-currency-select currency-select"
            onClick={() => setIsModalVisible(true)}
          >
            <img src="img/coins/eth.png" alt='eth' />
            <span>ETH</span>
          </button>
        </div>
      </div>
      <p className="dapp-section__withdraw-count">$1,265,537.00</p>
    </div>
  )
}

export default DappSectionWithdraw;
