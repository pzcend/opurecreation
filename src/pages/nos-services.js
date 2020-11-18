import React from "react"
import SEO from '../components/seo';
import Layout from '../containers/layout/layout'
import Banner from '../containers/blog/banner'
import Blog from '../containers/blog/blog-area'

export default () => (
    <Layout>
     <SEO title="Nos services "/>
        <Banner/>
        <Blog/>
    </Layout>
)
