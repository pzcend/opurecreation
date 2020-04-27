import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/a-propos" className="no-cursor">A propos</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/nos-realisations-web" className="no-cursor">Réalisations</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Mentions Légales</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/nos-services" className="no-cursor">Nos services</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Contactez nous</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;