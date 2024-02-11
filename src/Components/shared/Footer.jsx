import React from 'react'
import { footer } from 'Data/footer';
import { Link } from 'react-router-dom';
import "Components/shared/styles/footer.css"


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <section id="footer">
                <footer>
                    <div className="footer-containe section-margin">
                        <footer className='footer'>
                            <div className="footer-grid">
                                {footer.map(item => item.title === 'Carru' ? <div key={item.title} className="footer__item-1">
                                    <h3 className="fs-400 fw-bold padding-block-100">{item.title}</h3>
                                    <div className="footer__item__content padding-block-300">
                                        <p className="fs-200 fs-op padding-right-max">{item.description}</p>
                                    </div>
                                    <div className="social__links padding-block-100">
                                        {item.links.map(socialIcon => <Link key={socialIcon.path} to={socialIcon.path}>{socialIcon.label}</Link>)}
                                    </div>
                                </div> : <div key={item.title}>
                                    <h3>{item.title}</h3>
                                    <div className="footer__item__contetn">
                                        <ul>
                                            {item.links.map(link => <li key={link.label} className='footer-link | fs-200 fs-op padding-block-100'><Link>{link.label}</Link></li>)}
                                        </ul>
                                    </div>
                                </div>)}

                            </div>
                            <hr />
                            <div className="footer-bottom">
                                <div className="copyright__section">
                                    ©{currentYear} Carru. All rights reserved
                                </div>
                                <div className="privacy__terms padding-block-200">
                                    <Link to={'#home'}>Privacy & Policy</Link>
                                    <Link to={'#home'}>Terms & Condition</Link>

                                </div>
                            </div>
                        </footer>
                    </div>
                </footer>
            </section>
        </>
    )
}
