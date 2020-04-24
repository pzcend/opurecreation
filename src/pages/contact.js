import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import ContactFormSection from '../containers/contact/contact-form'
import ContactInfoSection from '../containers/contact/contact-info'

export default () => (
    <Layout headerStyle="darkHeader">
        <SEO title="Contactez O Pure Création "/>
        <ContactFormSection/>
        <ContactInfoSection/>
    </Layout>
)
