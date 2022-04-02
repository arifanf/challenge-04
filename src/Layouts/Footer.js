import React from 'react'
import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiTwitch } from 'react-icons/fi'
import { HiOutlineMail } from "react-icons/hi";

import styles from './layout.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="d-flex justify-content-between">
                        <div className={styles.footer_address}>
                            <div className={styles.footer_item}>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
                            <div className={styles.footer_item}>binarcarrental@gmail.com</div>
                            <div className={styles.footer_item}>081-233-334-808</div>
                        </div>
                        <div className={styles.footer_navigation}>
                            <div className={styles.footer_item}><Link to="/" className={styles.navigation_item}>Our services</Link></div>
                            <div className={styles.footer_item}><Link to="/" className={styles.navigation_item}>Why Us</Link></div>
                            <div className={styles.footer_item}><Link to="/" className={styles.navigation_item}>Testimonial</Link></div>
                            <div className={styles.footer_item}><Link to="/" className={styles.navigation_item}>FAQ</Link></div>
                        </div>
                        <div className={styles.footer_connect}>
                            <div className={styles.footer_item}>Connect with us</div>
                            <div className="container">
                                <div className="row">
                                    <div className={styles.footer_connect_iconbg}>
                                        <FiFacebook className={styles.footer_connect_icon} />
                                    </div>
                                    <div className={styles.footer_connect_iconbg}>
                                        <FiInstagram className={styles.footer_connect_icon} />
                                    </div>
                                    <div className={styles.footer_connect_iconbg}>
                                        <FiTwitter className={styles.footer_connect_icon} />
                                    </div>
                                    <div className={styles.footer_connect_iconbg}>
                                        <HiOutlineMail className={styles.footer_connect_icon} />
                                    </div>
                                    <div className={styles.footer_connect_iconbg}>
                                        <FiTwitch className={styles.footer_connect_icon} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.footer_copyright}>
                            <div className={styles.footer_item}>Copyright Binar 2022</div>
                            <div className={styles.navigation_logo}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer