import React from 'react'

import { Header } from '../interface/Header'
import { Footer } from '../interface/Footer'


export const Layout = ({ children }) => (
    <div id="layout">
        <Header />
        <main>
            { children }
        </main>
        <Footer />
    </div>
)
