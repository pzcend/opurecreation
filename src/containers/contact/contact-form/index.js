import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import Button from '../../../components/shared/button'
import Form, {Input, Textarea} from '../../../components/shared/form'
import Image from '../../../components/image'
import {ContactSectionWrap, BannerArea, ContactFormWrap, ContactForm} from './contact-form.stc'
 
const ContactFormSection = ({headingStyle, textStyle, inputStyle, textareaStyle}) => {
    const bannerQueryData = useStaticQuery(graphql `
        query ContactBannerQuery {
            pagedataJson(id: {eq: "contact_page_data"}) {
                title
                subtitle
                banner_img {
                    childImageSharp {
                        fluid(maxWidth: 700, maxHeight: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);

  

    const {title, subtitle} = bannerQueryData.pagedataJson;
    const imageData = bannerQueryData.pagedataJson.banner_img.childImageSharp.fluid
    return (
        <ContactSectionWrap>
            <div className="row align-items-center">
                <div className="col-2">
                    <BannerArea id="contact-form-banner">
                        <Image fluid={imageData} alt="Contactez O Pure création."/>
                    </BannerArea>
                </div> 
                <div className="col-2 offset-1">
                    <ContactFormWrap>
                        <div className="rn-project-meta-inner">
                            {title && <Text {...textStyle}>{title}</Text>}
                            {subtitle && <Heading {...headingStyle}>{subtitle}</Heading>}
                        </div>
                        <ContactForm>
                            <Form>
                            <form method="post" action="/mail.php">
                            <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Nom"
                                    halfwidth
                                    {...inputStyle}
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    halfwidth
                                />
                                <Textarea
                                    name="message" 
                                    placeholder="Message"
                                    {...textareaStyle}
                                />
                                <h3>Captcha</h3>
                                <p><img src="/capt.jpg" width="300px" heigt="100px" alt="capt logo" /></p>
                                <p>Merci de taper le mot inscrit dans l'image pour valider l'envoi du formulaire.</p>
                                <Input
                                    type="text"
                                    name="captcha"
                                    id="captcha"
                                    placeholder="Captcha"
                                    {...textareaStyle}
                                />
                               <div>
                                <Button type="submit" {...textareaStyle}>Envoyer</Button>
                                </div>
                                </form>
                                
                            </Form>
                        </ContactForm>
                    </ContactFormWrap>
                </div>
            </div>
        </ContactSectionWrap>
    )
}

ContactFormSection.propTypes = {
    headingStyle: PropTypes.object,
    textStyle: PropTypes.object,
    textareaStyle: PropTypes.object
}

ContactFormSection.defaultProps = {
    headingStyle: {
        fontSize: '40px',
        lineHeight: '55px',
        color: 'primary',
        fontweight: 600,
        responsive: {
            medium: {
                fontSize: '24px',
                lineHeight: 'initial'
            }
        }
    },
    divStyle:{
        mt: '20px'
    },
    textStyle: {
        as: 'span',
        color: '#000000',
        fontweight: 500,
        fontSize: '16px',
        texttransform: 'uppercase',
        letterspacing: '1px',
        display: 'inline-block',
        mb: '17px',
        lineHeight: 1,
        responsive: {
            medium: {
                fontSize: '12px',
                mb: '10px',
            }
        }
    },
    inputStyle: {
        responsive:{
            xsmall: {
                mb: '20px'
            }
        }
    },
    textareaStyle: {
        mt: '40px',
        mb: '40px',
        responsive: {
            xsmall: {
                mt: '25px',
                mb: '25px'
            }
        }
    }
}

export default ContactFormSection;