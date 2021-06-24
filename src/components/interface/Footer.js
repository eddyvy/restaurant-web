import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../router/routes'
import { logo } from '../../data/data'


export const Footer = () => (
    <footer className="footer">
        <img className="footer__logo" src={ logo.src } alt={ logo.alt } />
        <div className="footer__brand">
            <h5>Resto Restaurant</h5>
            <p>The best restaurant you can choose !</p>
        </div>
        <div className="footer__legal">
            <Link className="footer__legal-link" to={ routes.privacy } >Privacy Policy</Link>
            <Link className="footer__legal-link" to={ routes.cookies } >Cookies Policy</Link>
            <Link className="footer__legal-link" to={ routes.legal }   >Legal Notice</Link>
            <Link className="footer__legal-link" to={ routes.about }   >About us</Link>
            <p className="footer__legal-p">2021 @Copyright</p>
        </div>
    </footer>
)
