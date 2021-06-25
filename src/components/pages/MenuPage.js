import React from 'react'

import { Layout } from '../templates/Layout'


export const MenuPage = () => {

    return (
        <Layout>
            <div className="menu">
                <h1>MenuPage</h1>

                <embed
                    src="http://www.africau.edu/images/default/sample.pdf"
                    type="application/pdf"
                />
            </div>
        </Layout>
    )
}
