import React, { useState } from 'react'
import DappActions from '../../components/DappActions';
import DappFooter from '../../components/DappFooter';
import ModalWindow from '../../components/ModalWindow';
import SelectToken from '../../components/SelectToken';
import './dapp.css'

export const Dapp = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <>
      <main className='dapp'>
        <section className='dapp-section'>
          <h1 className="dapp-section__title">
            <span>Stake coins</span>
            141,496
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
