import React from 'react'

import { phoneIcon } from '../../data/data'
import { SocialNet } from '../interface/SocialNet'

export const ContactBox = () => {
    return (
        <div className="contactBox">
            <span className="contactBox__item">
                <b className="base__colored">Call</b> us !
            </span>
            <a href="tel:+55 555 555 555" className="contactBox__item contactBox__item-link"><img src={ phoneIcon.src } alt={ phoneIcon.alt } />+55 555 555 555</a>
            <span className="contactBox__item">
                <b className="base__colored">Interact</b> with us !
            </span>
            <SocialNet />
        </div>
    )
}
