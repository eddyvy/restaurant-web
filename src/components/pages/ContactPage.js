import React from 'react'

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
        </Layout>
    )
}
