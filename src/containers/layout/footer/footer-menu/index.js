import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/company" className="no-cursor">A propos</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Réalisations</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Mentions Légales</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Actualités</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Contactez nous</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;