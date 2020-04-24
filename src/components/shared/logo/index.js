import React from 'react'
import {Link} from 'gatsby'
import {LogoWrapper} from './logo.stc';
import logo from '../../../assets/img/logo/logo-opure-white.png';
import logoBlack from '../../../assets/img/logo/logo-opure-color.png';

const Logo = (props) => {
    return (
        <LogoWrapper {...props}>
            <Link to="/" className="big-cursor">
                <img src={logo} alt="creative agency" className="white-logo"/>
                <img src={logoBlack} alt="creative agency" className="black-logo"/>
            </Link>
        </LogoWrapper>
    )
}

export default Logo
