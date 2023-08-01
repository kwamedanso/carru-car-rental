import React from 'react'
import { RiFacebookFill, RiTwitterFill } from 'react-icons/ri';
import { ImInstagram } from 'react-icons/im';
import { about, community, socials } from '../Data/footer';
import '../Styles/footer.css'

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section id="footer">
                <footer>
                    <div className="footer-container">
                        <footer className='footer'>
                            <div className="footer-grid">
                                <div className="footer__item-1">
                                    <h3 className="fs-400 fw-bold padding-block-100">Carru</h3>
                                    <div className="footer__item__content padding-block-300">
                                        <p className="fs-200 fs-op padding-right-max">Our vision is to provide convenience and help increase your sales business.</p>
                                    </div>
                                    <div className="social__links padding-block-100">
                                        <RiFacebookFill />
                                        <RiTwitterFill />
                                        <ImInstagram />
                                    </div>
                                </div>
                                <div className="footer__item-2">
                                    <h3 className="fs-400 fw-bold padding-block-100">About</h3>
                                    <div className="footer__item__content">
                                        <ul>
                                            {about.map(item => <ListItem key={item} content={item} />)}
                                        </ul>
                                    </div>
                                </div>
                                <div className="footer__item-3">
                                    <h3 className="fs-400 fw-bold padding-block-100">Community</h3>
                                    <div className="footer__item__content">
                                        <ul>
                                            {community.map(item => <ListItem key={item} content={item} />)}
                                        </ul>

                                    </div>

                                </div>
                                <div className="footer__item-4">
                                    <h3 className="fs-400 fw-bold padding-block-100">Socials</h3>
                                    <div className="footer__item__content">
                                        <ul>
                                            {socials.map(item => <ListItem key={item} content={item} />)}
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="footer-bottom">
                                <div className="copyright__section">
                                    ©{currentYear} Carru. All rights reserved
                                </div>
                                <div className="privacy__terms padding-block-200">
                                    <a href='#home'>Privacy & Policy</a>
                                    <a href='#home'>Terms & Condition</a>

                                </div>
                            </div>
                        </footer>
                    </div>
                </footer>
            </section>
        </>
    )
}

function ListItem(props) {
    return (
        <li className='footer-link | fs-200 fs-op padding-block-100'><a href='#home'>{props.content}</a></li>
    )
}