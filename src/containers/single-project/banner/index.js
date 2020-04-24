import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'
import {BannerWrap} from './banner.stc'


const Banner = () => {
    const projectHeroQueryData = useStaticQuery(graphql `
        query ProjectHeroDataQuery {
            pagedataJson(id: {eq: "single_project_page_data"}) {
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
    const banngerImg = projectHeroQueryData.pagedataJson.banner_img.childImageSharp.fluid;
    return(
        <BannerWrap>
            <Image fluid={banngerImg} alt="Réalisations de site internet en Charente"/>
        </BannerWrap>
    )
}

export default Banner;