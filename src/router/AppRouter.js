import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import { PrivateRoute } from './PrivateRoute'

import { routes } from './routes'

import { HomePage } from '../components/pages/HomePage'
import { AboutPage } from '../components/pages/AboutPage'
import { AgendaPage } from '../components/pages/private-pages/AgendaPage'
import { BookingPage } from '../components/pages/BookingPage'
import { ContactPage } from '../components/pages/ContactPage'
import { LoginPage } from '../components/pages/LoginPage'
import { MenuPage } from '../components/pages/MenuPage'
import { OrderPage } from '../components/pages/OrderPage'
import { Cookies } from '../components/pages/policy-pages/Cookies'
import { Privacy } from '../components/pages/policy-pages/Privacy'
import { Legal } from '../components/pages/policy-pages/Legal'
import { NotFound } from '../components/pages/policy-pages/NotFound'


export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path={ routes.slash }      component={ HomePage }      />
                <Route exact path={ routes.home }       component={ HomePage }      />
                <Route exact path={ routes.about }      component={ AboutPage }     />
                <Route exact path={ routes.booking }    component={ BookingPage }   />
                <Route exact path={ routes.contact }    component={ ContactPage }   />
                <Route exact path={ routes.login }      component={ LoginPage }     />
                <Route exact path={ routes.menu }       component={ MenuPage }      />
                <Route exact path={ routes.order }      component={ OrderPage }     />
                <Route exact path={ routes.cookies }    component={ Cookies }       />
                <Route exact path={ routes.privacy }    component={ Privacy }       />
                <Route exact path={ routes.legal }      component={ Legal }         />
                <Route exact path={ routes.notFound }   component={ NotFound }      />

                <PrivateRoute isAuthenticated={ true } path={ routes.admin } redirection={ routes.slash } component={ AgendaPage } />

                <Redirect to={ routes.notFound } />
            </Switch>
        </Router>
    )
}
