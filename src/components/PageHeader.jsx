import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const PageHeader = ({setIsWalletWindowVisible, isAuth}) => {

  const pageHeaderRef = useRef(null);

  return (
    <header className="page-header" ref={pageHeaderRef}>
      <Link to="/" className="page-header__logo">
        <img src="img/logo.svg" alt="Liquid Staking Derivatives logo" />
      </Link>
      <nav className="page-header__nav">
        <ul className="page-header__nav-list">
          <li className="page-header__nav-item">
            <a href="">Home</a>
          </li>
          <li className="page-header__nav-item">
            <a href="">Chart</a>
          </li>
          <li className="page-header__nav-item">
            <a href="">Contract</a>
          </li>
          <li className="page-header__nav-item">
            <a href="">Stake</a>
          </li>
          <li className="page-header__nav-item">
            <a href="">LSD OTC</a>
          </li>
        </ul>
      </nav>
      <nav className="page-header__nav-right">
        <a href="">Buy LSD</a>
        {
          isAuth ?
          <button
            className="address-button"
            onClick={() => setIsWalletWindowVisible(true)}
          >
            062x ... 18tF
          </button>
          :
          <button type='menu' className='page-header__nav-connect' onClick={() => setIsWalletWindowVisible(true)}>Connect</button>
        }
      </nav>
      <button
        className="page-header__menu-button"
        onClick={(e) => {
          e.target.classList.toggle('opened');
          pageHeaderRef.current.classList.toggle('opened');
        }}
      ></button>
    </header>
  )
}

export default PageHeader;
