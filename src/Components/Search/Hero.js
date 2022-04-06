import React from 'react'

import HeroCar from './HeroCar.png'

import styled from 'styled-components'

const Hero = () => {
  return (
    <HeroBox>
      <div className="col">
        <div className="text">
          <h1 className="title">Sewa & Rental Mobil Terbaik di kawasan Semarang</h1>
          <div className="subtitle">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</div>
        </div>
      </div>
      <div className="image">
        <div className="col-auto pr-0 mb-0">
          <img src={HeroCar} alt="Hero Car" />
        </div>
      </div>
    </HeroBox>
  )
}

const HeroBox = styled.div`
  height: 419px;
  background: #F1F3FF; 
  display: flex;
  .text {
    display: flex;
    flex-direction: column;
    margin-left: 4rem;
    margin-top: 5.5rem;
    .title {
      font-size: 30px;
      font-weight: bold;
      line-height: 150%;
    }
    .subtitle {
      font-size: 14px;
      margin-top: .5rem;
    }
  }
  .image {
    display: flex;
    align-items: end;
  }
`

export default Hero