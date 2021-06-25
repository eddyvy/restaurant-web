import React, { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { routes } from '../../router/routes'
import { arrowDisplay, logo } from '../../data/data'


export const Header = () => {

    const navLinkInitialClassName = 'header__navlink'
    const location = useLocation()
    
    useEffect(() => {
        const path = (location.pathname === routes.home) ? routes.slash : location.pathname
        const navLinkSelected = document.getElementById( path )
        
        if (!navLinkSelected) {
            return
        }
        
        navLinkSelected.className += ' header__navlink-selected'
        
        return () => {
            navLinkSelected.className = navLinkInitialClassName
        }
    }, [location])
    
    
    const toggleLinks = (e) => {
        const navLinks = [ ...document.getElementsByClassName('header__navlink') ]
        
        if ( e.target.className !== 'header__arrowDisplay' ) {
            e.target.className = 'header__arrowDisplay'
            navLinks.map( navLink => navLink.style.display = 'none')
        } else {
            e.target.className += ' header__arrowDisplay-clicked'
            navLinks.map( navLink => navLink.style.display = 'block')
        }
    }
    
    return (
        <header className="header">
            <NavLink className={ navLinkInitialClassName } to={ routes.slash }    id={ routes.slash }    >Home</NavLink>
            <NavLink className={ navLinkInitialClassName } to={ routes.menu }     id={ routes.menu }     >Menu</NavLink>
            <NavLink className={ navLinkInitialClassName } to={ routes.booking }  id={ routes.booking }  >Booking</NavLink>
            <img className="header__logo" src={ logo.src } alt={ logo.alt } />
            <NavLink className={ navLinkInitialClassName } to={ routes.order }    id={ routes.order }    >Order</NavLink>
            <NavLink className={ navLinkInitialClassName } to={ routes.about }    id={ routes.about }    >About</NavLink>
            <NavLink className={ navLinkInitialClassName } to={ routes.contact }  id={ routes.contact }  >Contact</NavLink>
            <img className="header__arrowDisplay" src={ arrowDisplay.src } alt={ arrowDisplay.alt } onClick={ toggleLinks } />
        </header>
    )
}