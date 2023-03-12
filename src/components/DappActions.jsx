import React from 'react'
import DappSectionHeader from './DappSectionHeader'
import DappSectionReceive from './DappSectionReceive'
import DappSectionWithdraw from './DappSectionWithdraw'
import { useSigner } from '@thirdweb-dev/react'
import { stake } from '../contracts/stake'

const DappActions = ({ setIsModalVisible, isModalVisible }) => {

  const signer = useSigner()
  const stakeEth = async () => {
    await stake(signer, 1)
  }
  return (
    <div className='dapp-section__actions'>
      <div className="dapp-section__actions-wrapper">
        <DappSectionHeader />
        <DappSectionWithdraw setIsModalVisible={setIsModalVisible} />
        <DappSectionReceive setIsModalVisible={setIsModalVisible} />
      </div>
      <button type="button" className="dapp-section__submit" onClick={stakeEth}>Stake now</button>
    </div>
  )
}

export default DappActions;
