import React from 'react'
import DappSectionHeader from './DappSectionHeader'
import DappSectionReceive from './DappSectionReceive'
import DappSectionWithdraw from './DappSectionWithdraw'
import { useSigner } from '@thirdweb-dev/react'

const DappActions = ({setIsModalVisible, isModalVisible}) => {

  const signer = useSigner()
  
  return (
    <div className='dapp-section__actions'>
      <div className="dapp-section__actions-wrapper">
        <DappSectionHeader />
        <DappSectionWithdraw setIsModalVisible={setIsModalVisible} />
        <DappSectionReceive  setIsModalVisible={setIsModalVisible}/>
      </div>
      <button type="button" className="dapp-section__submit">Stake now</button>
    </div>
  )
}

export default DappActions;
