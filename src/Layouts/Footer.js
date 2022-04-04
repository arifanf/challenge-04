import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiTwitch } from 'react-icons/fi'
import { HiOutlineMail } from "react-icons/hi";

import styled from 'styled-components'
import styles from './layout.module.css'

const Footer = () => {
  return (
    <FooterBox>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between">
                        <div className="address">
                            <div className="item">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                            <div className="item">binarcarrental@gmail.com</div>
                            <div className="item">081-233-334-808</div>
                        </div>
                        <div className="navigation">
                            <div className="item"><Link to="/" className={styles.navigation_item}>Our services</Link></div>
                            <div className="item"><Link to="/" className={styles.navigation_item}>Why Us</Link></div>
                            <div className="item"><Link to="/" className={styles.navigation_item}>Testimonial</Link></div>
                            <div className="item"><Link to="/" className={styles.navigation_item}>FAQ</Link></div>
                        </div>
                        <div className="connect">
                            <div className="item">Connect with us</div>
                            <div className="container">
                                <div className="row">
                                    <div className="iconbg">
                                        <FiFacebook className="icon" />
                                    </div>
                                    <div className="iconbg">
                                        <FiInstagram className="icon" />
                                    </div>
                                    <div className="iconbg">
                                        <FiTwitter className="icon" />
                                    </div>
                                    <div className="iconbg">
                                        <HiOutlineMail className="icon" />
                                    </div>
                                    <div className="iconbg">
                                        <FiTwitch className="icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright">
                            <div className="item">Copyright Binar 2022</div>
                            <div className="navigation_logo"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </FooterBox>
  )
}

const FooterBox = styled.div`
    height: 248px;
    display: flex;
    justify-content: center;
    background: #38a8ea;
    font-size: 14px;
    .item {
        margin: 1rem 0;
    }
    .address {
        width: 250px;
        margin-top: .5rem;
    }
    .navigation {
        margin-top: .5rem;
    }
    .connect {
        margin-top: .5rem;
        .iconbg {
            width: 30px;
            height: 30px;
            background: #0D28A6;
            border-radius: 999px;
            margin-right: .5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            .icon {
                color: #FFF;
            }
        }
    }
    .copyright {
        margin-top: .5rem;
    }
`

export default Footer