import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import About from '../containers/company/about'
import Testimonial from '../containers/company/testimonial'
import Team from '../containers/company/team'

export default () => (
    <Layout>
        <SEO title="O Pure Création développement de site internet en Charentes"/>
        <Banner/>
        <About/>
     	<Team/>
        <Testimonial/>
    </Layout>
)
