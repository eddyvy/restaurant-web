import React, { useState } from 'react'

import { Layout } from '../templates/Layout'

import moment from 'moment'


export const BookingPage = () => {
    
    const today = moment().format("YYYY-MM-DD")

    const [formValues, setformValues] = useState({
        date: today,
        time: '12:30',
        name: '',
        email: ''
    })

    const { date, time, name, email } = formValues
    
    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    const handleInputChange = (e) => {
        setformValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <Layout>
            <div className="booking">
                <h1>Book a table</h1>
                <form
                    className="booking__form"
                    onSubmit={ handleSubmit }
                >
                    <span className="booking__form-item">Select date and time</span>
                    <input
                        className="booking__form-item"
                        type="date"
                        name="date"
                        value={ date }
                        onChange={ handleInputChange }
                    />
                    <select
                        className="booking__form-item"
                        name="time"
                        value={ time }
                        onChange={ handleInputChange }
                    >
                        <option value="12:30">12:30</option>
                        <option value="13:00">13:00</option>
                        <option value="13:30">13:30</option>
                        <option value="14:00">14:00</option>
                        <option value="14:30">14:30</option>
                        <option value="15:00">15:00</option>
                        <option value="15:30">15:30</option>
                        <option value="20:00">20:00</option>
                        <option value="20:30">20:30</option>
                        <option value="21:00">21:00</option>
                        <option value="21:30">21:30</option>
                        <option value="22:00">22:00</option>
                        <option value="22:30">22:30</option>
                    </select>
                    <span className="booking__form-item">Name</span>
                    <input
                        className="booking__form-item"
                        type="text"
                        name="name"
                        value={ name }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <span className="booking__form-item">Email</span>
                    <input
                        className="booking__form-item"
                        type="email"
                        name="email"
                        value={ email }
                        onChange={ handleInputChange }
                        autoComplete="off"
                    />
                    <button className="booking__form-item-button" type="submit" >Submit</button>
                </form>
            </div>
        </Layout>
    )
}
