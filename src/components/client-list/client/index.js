import React from 'react'
import PropTypes from 'prop-types'
import {ClientWrap} from './client.stc'

export const Client = ({link, name, categorie, client_image, ...props}) => {
    return (
        <ClientWrap {...props}>

        <p><a className="color" target="_blank" href={link}>{name}</a></p>
        <p>{categorie}</p>
        
            
        </ClientWrap>
    )
}

Client.propTypes = {
    link: PropTypes.string,
    image: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])
}
