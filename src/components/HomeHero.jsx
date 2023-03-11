import React from 'react'
import HeroCurrencies from './HeroCurrencies'

const HomeHero = () => {
  return (
    <article className="hero">
      <section className="hero__section">
        <img src="img/hero-img.png" className="hero__img" />
        <h1 className="hero__title">
          Stake with ease,
          <span>earn with peace</span>
        </h1>
        <p className="hero__about">Staking with LSD keeps your assets liquid while you earn  passive income.</p>
        <footer className="hero__footer">
          <a href="" target="_blank">Get started</a>
          <a href="" target="_blank"></a>
        </footer>
      </section>
      <HeroCurrencies />
    </article>
  )
}

export default HomeHero
