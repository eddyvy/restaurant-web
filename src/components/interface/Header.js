import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { routes } from '../../router/routes'
import { logo } from '../../data/data'


export const Header = () => {
    
    const location = useLocation()

    useEffect(() => {
        const path = (location.pathname === routes.home) ? routes.slash : location.pathname
        const navLinkSelected = document.getElementById( path )

        if (!navLinkSelected) {
            return
        }

        navLinkSelected.className = 'header__navlink header__navlink-selected'

        return () => {
            navLinkSelected.className = 'header__navlink'
        }
    }, [location])

    return (
        <header className="header">
            <NavLink className="header__navlink" to={ routes.slash }    id={ routes.slash }    >Home</NavLink>
            <NavLink className="header__navlink" to={ routes.menu }     id={ routes.menu }     >Menu</NavLink>
            <NavLink className="header__navlink" to={ routes.booking }  id={ routes.booking }  >Booking</NavLink>
            <img className="header__logo" src={ logo.src } alt={ logo.alt } />
            <NavLink className="header__navlink" to={ routes.order }    id={ routes.order }    >Order</NavLink>
            <NavLink className="header__navlink" to={ routes.about }    id={ routes.about }    >About</NavLink>
            <NavLink className="header__navlink" to={ routes.contact }  id={ routes.contact }  >Contact</NavLink>
        </header>
    )
}