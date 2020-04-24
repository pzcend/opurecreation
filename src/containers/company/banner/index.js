import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'

const Banner = () => {
    const bannerQueryData = useStaticQuery(graphql `
        query CompanyBannerQuery {
            pagedataJson(id: {eq: "company_page_data"}) {
                banner_img {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 350, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }      
    `);
    const imageData = bannerQueryData.pagedataJson.banner_img.childImageSharp.fluid
    return (
        <div className="banner-area">
            <Image fluid={imageData} alt="O Pure Création création de site Web en Charente"/>
        </div>
    )
}

export default Banner
 