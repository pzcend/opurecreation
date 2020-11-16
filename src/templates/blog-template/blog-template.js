import React from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import SEO from '../../components/seo';
import Layout from '../../containers/layout/layout'
import Heading from '../../components/shared/heading'
import Text from '../../components/shared/text'
import {
    BlogDetailsWrap,
    BlogDetailsHeader,
    BlogDetailsMetaWrap,
    BlogDetailsMeta,
    BlogDetailsContent,
} from './blog-template.stc'
 
function BlogTemplate({data, ...restProps}) {
    const {titleStyle, metaBoxStyle, metaHeadingStyle, metaTextStyle} = restProps;
    const post = data.markdownRemark.frontmatter; 
    const imageData = post.image.childImageSharp.fluid;

   
   
    return (
        <Layout>
            <SEO title={post.title}/>
            <BlogDetailsWrap>
                <BlogDetailsHeader fluid={imageData}>
                    <div className="row align-items-center">
                        <div className="col-2 offset-1">
                            <div className="rn-blog-details-meta-inner">
                                <Heading {...titleStyle}>{post.title}</Heading>
                                
                
                            </div>
                        </div>
                        <div className="col-1 offset-1">
                            <BlogDetailsMetaWrap>
                                <BlogDetailsMeta {...metaBoxStyle}>
                                    
                                </BlogDetailsMeta>
                                <BlogDetailsMeta {...metaBoxStyle}>
                                    <Text {...metaTextStyle}>Développeur :</Text>
                                    <Heading {...metaHeadingStyle}>{post.author}</Heading>
                                   

                                </BlogDetailsMeta>
                              
                            </BlogDetailsMetaWrap>
                        </div>
                    </div>
                </BlogDetailsHeader>
                <BlogDetailsContent>
                 
                    <div dangerouslySetInnerHTML={{__html: data.markdownRemark.html}}/>

        

                </BlogDetailsContent>
               
            </BlogDetailsWrap>
        </Layout>
    )
}

export const query = graphql `
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            frontmatter {
                id
                title
                date(formatString: "MMM Do, YYYY")
                author
                categorie
                image {
                    childImageSharp {
                      fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp
                        presentationWidth
                        presentationHeight
                      }
                    }
                }
            }  
            html 
        }
    }
`;

BlogTemplate.propTypes = {
    metaHeadingStyle: PropTypes.object,
    metaTextStyle: PropTypes.object,
    titleStyle: PropTypes.object
}

BlogTemplate.defaultProps = {
    titleStyle: {
        as: 'h1',
        color: '#fff',
        responsive: {
            small:{
                mb: '22px'
            }
        }
    },
    metaBoxStyle: {
        mb: '30px',
        responsive: {
            small: {
                mb: 0,
                pt: '11px',
                pb: '11px'
            }
        }
    },
    metaHeadingStyle: {
        as: 'h6',
        color: '#fff',
        fontSize: '12px',
        fontweight: 700,
        letterspacing: '2px',
        mb: '12px'
    },
    metaTextStyle: {
        m: 0,
        fontSize: '12px',
        color: '#fff',
        letterspacing: '1px'
    }
}

export default BlogTemplate
