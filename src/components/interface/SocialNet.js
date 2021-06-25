import React from 'react'
import { Link } from 'react-router-dom'

import { emailIcon, facebookIcon, twitterIcon, instagramIcon } from '../../data/data'

export const SocialNet = () => {
    return (
        <div className="socialNet">
            <Link 
                to="/contact"
                className="socialNet__link"
            >
                <img src={ emailIcon.src } alt={ emailIcon.alt } />
            </Link>
            <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="socialNet__link"
            >
                <img src={ facebookIcon.src } alt={ facebookIcon.alt } />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="socialNet__link"
            >
                <img src={ instagramIcon.src } alt={ instagramIcon.alt } />
            </a>
            <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="socialNet__link"
            >
                <img src={ twitterIcon.src } alt={ twitterIcon.alt } />
            </a>
        </div>
    )
}
