import React from 'react'
import PropTypes from 'prop-types'
import {ClientWrap} from './client.stc'

export const Client = ({link, name, categorie, client_image, ...props}) => {
    return (
        <ClientWrap {...props}>

        <p><strong><a target="_blank" href={link}>{name}</a></strong></p>
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
