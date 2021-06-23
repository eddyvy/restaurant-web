import React from 'react'
import { Link } from 'react-router-dom'

import { routes } from '../../router/routes'


export const Footer = () => (
    <footer>
        <div>
            <div>
                <div>
                    <h5>Brand</h5>
                    <p>The best web site</p>
                </div>
                <div>
                    <ul>
                        <li><Link to={ routes.privacy } >Política de Privacidad</Link></li>
                        <li><Link to={ routes.cookies } >Política de Cookies</Link></li>
                        <li><Link to={ routes.legal }   >Aviso Legal</Link></li>
                        <li><Link to={ routes.about }   >Sobre Nosotros</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div>
            <div>
                2021 @Copyright
            </div>
        </div>
    </footer>
)
