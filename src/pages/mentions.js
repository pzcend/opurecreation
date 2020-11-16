import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/company/banner'
import Mentions from '../containers/company/mentions'


export default () => (
    <Layout>
        <SEO title="Mentions légales"/>
        <Banner/>
        <Mentions/>
    </Layout>
)
