import React from 'react'
import { ContactBox } from '../interface/ContactBox'

import { Layout } from '../templates/Layout'


export const ContactPage = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <Layout>
            <div className="contact">
                <h1>Get in touch with us !</h1>
                <form className="contact__form" onSubmit={ handleSubmit } >
                    <input
                        className="contact__input"
                        type="email"
                        name="email"
                        placeholder="Your email"
                        autoComplete="off"
                    />
                    <input
                        className="contact__input"
                        type="text"
                        name="subject"
                        placeholder="Message subject"
                    />
                    <textarea
                        className="contact__input-textarea"
                        type="text"
                        name="body"
                    />
                    <button
                        className="contact__input-button"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <ContactBox />
            <div className="contact__location">
                <span>Where we are ?</span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d877.7311885319308!2d-0.1566644664246257!3d51.520577904351455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2sBaker%20St%2C%20London%2C%20Reino%20Unido!5e0!3m2!1ses!2ses!4v1624633076123!5m2!1ses!2ses"></iframe>
            </div>
        </Layout>
    )
}
