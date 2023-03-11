import React, { useState, useEffect } from 'react'
import DappActions from '../../components/DappActions'
import DappFooter from '../../components/DappFooter'
import ModalWindow from '../../components/ModalWindow'
import SelectToken from '../../components/SelectToken'
import { getUpdateBalanceContract, getTokenLsETHContract } from '../../contracts'
import { showBalance } from '../../utils/common'

import './dapp.css'

export const Dapp = () => {
  const [stakedETH, setStakedETH] = useState()
  const [isModalVisible, setIsModalVisible] = useState(false)

  const getStakedETHAmount = async() => {
    const amount = await getUpdateBalanceContract()
    setStakedETH(amount)

    await getTokenLsETHContract()
  }
  useEffect(()=>{
    getStakedETHAmount()
  })
  
  return (
    <>
      <main className='dapp'>
        <section className='dapp-section'>
          <h1 className="dapp-section__title">
            <span>Stake coins</span>
            {showBalance(stakedETH)}
          </h1>
          <p className="dapp-section__about">ETH staked</p>
        </section>
        <DappActions setIsModalVisible={setIsModalVisible} />
      </main>
      <DappFooter />
      {
        isModalVisible &&
        <ModalWindow>
          <SelectToken setIsModalVisible={setIsModalVisible} />
        </ModalWindow>
      }
    </>
  )
};
