import React from 'react'
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    redirection,
    ...rest
}) => {

    return (
        <Route {...rest}
            component={ (props) =>(
                ( isAuthenticated )
                    ? <Component { ...props } />
                    : <Redirect to={ redirection } />
            )}
        />
    )
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired,
    redirection: PropTypes.string.isRequired
}
