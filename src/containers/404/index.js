import React from 'react'
import {Link} from 'gatsby'
import {ErrorWrap} from './404.style'

const ErrorArea = () => {
    return (
        <ErrorWrap>
            <h1>404</h1>
            <h2>Page inconnue</h2>
            <Link to="/">Retour à l'accueil</Link>
        </ErrorWrap>
    )
}

export default ErrorArea;