import React from 'react'
import {Link} from 'gatsby'
import {LogoWrapper} from './logo.stc';
import logo from '../../../assets/img/logo/logo-white.png';
import logoBlack from '../../../assets/img/logo/logov3.png';

const Logo = (props) => {
    return (
        <LogoWrapper {...props}>
            <Link to="/" className="big-cursor">
                <img src={logo} alt="création site web charente" className="white-logo"/>
                <img src={logoBlack} alt="création application mobile charente" className="black-logo"/>
            </Link>
        </LogoWrapper>
    )
}

export default Logo
