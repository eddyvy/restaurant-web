import React from 'react'
import PropTypes from 'prop-types'


export const ImageCard = ({ src, alt, title, body }) => {
    return (
        <div className="imageCard">
            <div className="imageCard__container">
                <div className="imageCard__title-container">
                    <h3 className="imageCard__title">{ title }</h3>
                </div>
                <img className="imageCard__img" src={ src } alt={ alt } />
                <div className="imageCard__body-container">
                    <p className="imageCard__body">{ body }</p>
                </div>
            </div>
        </div>
    )
}


ImageCard.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string,
    body: PropTypes.string
}