import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import {MentionSectionWrap, SectionTitle, MentionContent, ProjectTypeList} from './mentions.stc'
 
const Mentions = ({HeadingStyle, paragraph, TextStyle, ProjectTypeHeading, ProjectTypeText}) => {
    const mentionsQueryData = useStaticQuery(graphql `
        query MentionsDataQuery {
            mentionsdataJson(id: {eq: "mentions-content"}) {
                id
                title
                desc
                content
                featured_work {
                    id
                    title
                    achivments
                }
            }
        }      
    `);
    const {title, desc, content, featured_work} = mentionsQueryData.mentionsdataJson;
    const delay = [200];
    return (
        <MentionSectionWrap>
            <div className="row">
                {(title || desc) && (
                    <div className="col-1 offset-1">
                        <SectionTitle>
                            {title && <Heading {...HeadingStyle}>{title}</Heading>}
                            {desc && <Text {...TextStyle}>{desc}</Text>}                        
                        </SectionTitle>
                    </div>
                )}
                {content && (
                    <div className="col-2 offset-1">
                        <MentionContent>
                           
                            {content.map((textData, i) => <Text key={`story-text-${i}`} {...paragraph}>{textData}</Text>)}

                            
                        </MentionContent>
                    </div>
                )}
            </div>
            {featured_work && (
                <div className="row section-pt-md">
                    <div className="col-4 offset-1">
                        <div className="content row">
                            {featured_work.map((work,i) => {
                                delay.push(delay[i] + 200)
                                return(
                                    <div 
                                        key={work.id}
                                        className="col-1 project-type wow fadeInLeft" 
                                        data-wow-delay={`${delay}ms`} 
                                        data-wow-duration="1000ms">
                                        {work.title && <Heading {...ProjectTypeHeading}>{work.title}</Heading>}
                                        {work.achivments && (
                                            <ProjectTypeList>
                                                {work.achivments.map((achiv, i) => (
                                                    <li key={`${work.id}-${i}`}><Text {...ProjectTypeText}>{achiv}</Text></li>
                                                ))}
                                            </ProjectTypeList>
                                        )}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </MentionSectionWrap>
    )
}

Mentions.propTypes = {
    HeadingStyle: PropTypes.object,
    TextStyle: PropTypes.object
}

Mentions.defaultProps = {
    HeadingStyle: {
        fontSize: '40px',
        texttransform: 'capitalize',
        lineHeight: '55px',
        color: 'primary',
        fontweight: 600,
        responsive: {
            medium: {
                fontSize: '24px',
                lineHeight: 'initial'
            },
            small: {
                fontSize: '25px',
                lineHeight: '35px'
            }
        }
    },
    TextStyle: {
        lineHeight: '26px'
    },
    ProjectTypeHeading: {
        as: 'h6',
        color: 'primary',
        fontSize: '12px',
        fontweight: 700,
        letterspacing: '2px',
        mb: '12px'
    },
    ProjectTypeText: {
        m: 0,
        fontSize: '12px',
        color: '#000000',
        letterspacing: '1px'
    }
}

export default Mentions;