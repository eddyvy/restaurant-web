import React from 'react'

import { aboutImg } from '../../data/data'
import { Layout } from '../templates/Layout'


export const AboutPage = () => {
    return (
        <Layout>
            <div className="about">
                <h1>About Us</h1>
                <div className="about__content">
                    <div className="about__content-text">
                        <h3>Who we are?</h3>
                        <p>
                            We are a restaurant of every kind of food that enjoy our job
                            <br />
                            at an imaginary location and we can start saying anything to
                            <br />
                            complete the about page which needs more content and it is done
                            <br />
                            manually by Eduard and can invent any kind of story to get
                            <br />
                            tones of text and complete this nices paragraph.
                        </p>
                    </div>
                    <img src={ aboutImg.src } alt={ aboutImg.alt } />
                </div>
            </div>
        </Layout>
    )
}
