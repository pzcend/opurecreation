import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import {ProjectSectionWrap} from './project.stc'
import Blog from '../../../components/blog/layout-two'
import {BlogSectionWrap, BlogInner} from '../../home-blog/feature-blog/feature-blog.stc'

const ProjectSection = ({section, project}) => {
    const projectQueryData = useStaticQuery(graphql `
    query ProjectPageDataQuery {
      homedataJson(id: {eq: "project_section_content"}) {
        id
        title
        subtitle
      }
      allProjectsJson {
        edges {
          node {
            id
            title
            sector
            client
            featured_image {
              childImageSharp {
                fluid(maxWidth: 1060, maxHeight: 750, quality: 100) {
                    ...GatsbyImageSharpFluid_withWebp
                    presentationWidth
                    presentationHeight
                }
              }
            }
          }
        }
      }
    }  
    `);
    const projectSecData = projectQueryData.homedataJson;
    const projectsData = projectQueryData.allProjectsJson.edges;
    return (
        <div>
        <ProjectSectionWrap {...section}>
            <div className="project-container">
                <div className="col-1 offset-1">
                    <SectionTitle
                        title={projectSecData.title}
                        subtitle={projectSecData.subtitle}
                    />
                </div>
            </div>
        </ProjectSectionWrap>
        <BlogSectionWrap {...section}>

         <BlogInner className="col-6 offset-1">
                <div className="row">
                    {projectsData.map((data, i) => (
                        <div className="col-2" key={`${data.node.id}-${i}`}>
                            <Blog
                                title={data.node.title}
                                author={data.node.client}
                                sector={data.node.sector}
                                id={data.node.id}
                                path={`/project/${data.node.id}`}
                                image={data.node.featured_image.childImageSharp}
                            />
                        </div>
                    ))}
                </div>
            </BlogInner>
        </BlogSectionWrap>
        </div>
    )
}

ProjectSection.propTypes = {
    section: PropTypes.object,
    project: PropTypes.object
}

ProjectSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    },
    project: {
        mt: '100px',
        responsive: {
            medium: {
                mt: '50px'
            }
        }
    }
}

export default ProjectSection
