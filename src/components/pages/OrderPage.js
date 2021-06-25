import React from 'react'
import { ContactBox } from '../interface/ContactBox'

import { Layout } from '../templates/Layout'


export const OrderPage = () => {
    return (
        <Layout>
            <div className="order">
                <h1>OrderPage</h1>
                <h3>Contact us for <b className="base__colored">delivery</b> or <b className="base__colored">take away</b> !</h3>
                <ContactBox />
            </div>
        </Layout>
    )
}
