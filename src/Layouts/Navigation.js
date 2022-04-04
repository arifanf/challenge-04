import React from 'react'
import { Link } from 'react-router-dom'

import styled from 'styled-components'

const Navigation = () => {
  return (
    <Navbar>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="logo"></div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <div class="px-4"><Link to="/" className="navigation_item">Our Services</Link></div>
              <div class="px-4"><Link to="/" className="navigation_item">Why Us</Link></div>
              <div class="px-4"><Link to="/" className="navigation_item">Testimonial</Link></div>
              <div class="px-4"><Link to="/" className="navigation_item">FAQ</Link></div>
              <div class="pl-4"><Link to="/" className="navigation_button">Register</Link></div>
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  )
}

const Navbar = styled.div`
  height: 85px;
  background: #F1F3FF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .logo {
    width: 100px;
    height: 34px;
    background: #0D28A6;
  }
  .navigation_item {
    color: #000;
    font-size: 14px;
    &:hover {
      color: #000;
      text-decoration: none;
    }
  }
  .navigation_button {
    color: #FFF;
    font-size: 14px;
    width: 81px;
    height: 36px;
    padding: 8px 12px;
    display: block;
    position: relative;
    line-height: 20px;
    text-align: center;
    background: #5CB85F;
    border-radius: 2px;
    &:hover {
      color: #FFF;
      text-decoration: none;
      font-weight: bold;
    }
  }
`

export default Navigation