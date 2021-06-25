import React from 'react'
import { Link } from 'react-router-dom'

import { homeImages } from '../../data/data'

import { Layout } from '../templates/Layout'
import { ImageCard } from '../utils/ImageCard'


export const HomePage = () => {

    return (
        <Layout>
            <div className="home">
                <div className="home__title">
                    <h1><b className="base__colored">Risto</b> Restaurant</h1>
                    <p>The best option to <b className="base__colored">eat</b> or <b className="base__colored">dinner</b> !</p>
                </div>
                <div className="home__display">
                    {
                        ( homeImages.length > 0)
                        && (
                            homeImages.map( ({ src, alt, title, body }) => (<ImageCard key={ src } src={ src } alt={ alt } title={ title } body={ body } />))
                        )
                    }
                </div>
                <div className="home__button-container">
                    <Link className="home__button" to="/booking" >Book now!</Link>
                    <Link className="home__button" to="/order" >Order now!</Link>
                </div>
            </div>
        </Layout>
    )
}
