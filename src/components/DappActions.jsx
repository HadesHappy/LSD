import React, { useState, useEffect } from 'react'
import DappSectionHeader from './DappSectionHeader'
import DappSectionReceive from './DappSectionReceive'
import DappSectionWithdraw from './DappSectionWithdraw'
import { stake, unstake, deposit, withdraw } from '../contracts/stake'
import { useSelector } from 'react-redux'
import { useAddress } from '@thirdweb-dev/react'

const DappActions = ({ setIsModalVisible, isModalVisible }) => {
  const stakeType = useSelector(state => state.inputReducer.stakeType)
  const inputToken = useSelector(state => state.inputReducer.inputToken)
  const inputValue = useSelector(state => state.inputReducer.inputValue)

  const address = useAddress()

  const [text, setText] = useState('Stake now')

  const handleClick = async () => {
    if (address) {
      if (stakeType === 'STAKE') {
        if (inputToken === 'ETH') {
          await deposit(inputValue)
        }
        else {
          await stake(inputValue)
        }
      }
      else {
        if (inputToken === 'LS-ETH') {
          await withdraw(inputValue)
        }
        else {
          await unstake(inputValue)
        }
      }
    } else {

    }
  }
  useEffect(() => {
    if (stakeType === 'STAKE')
      setText('Stake now')
    else
      setText('Unstake now')
  }, [stakeType])

  return (
    <div className='dapp-section__actions'>
      <div className="dapp-section__actions-wrapper">
        <DappSectionHeader />
        <DappSectionWithdraw setIsModalVisible={setIsModalVisible} />
        <DappSectionReceive setIsModalVisible={setIsModalVisible} />
      </div>
      <button type="button" className="dapp-section__submit" onClick={handleClick}>{text}</button>
    </div>
  )
}

export default DappActions;
