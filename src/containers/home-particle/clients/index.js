import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'
import SectionTitle from '../../../components/shared/section-title'
import ClientList, {Client} from '../../../components/client-list'
import {ClientSectionWrap, ClientWrap, ClientLeft, ClientRight} from './clients.stc'

const ClientSection = ({section}) => {
    const clientQueryData = useStaticQuery(graphql `
        query ParticleClientQuery {
            homeparticledataJson(id: {eq: "particle_clients_section_content"}) {
                title
                subtitle
                image {
                    childImageSharp {
                        fluid(quality: 100){
                            src
                        }
                    }
                }
            }
            allClientsJson(limit: 10) {
                edges {
                  node {
                    id
                    link
                    name
                    categorie
                    image {
                      childImageSharp {
                        fluid(quality: 100) {
                          src
                        }
                      }
                    }
                  }
                }
            }
        }      
    `)
    const clientSecData = clientQueryData.homeparticledataJson;
    const clients = clientQueryData.allClientsJson.edges;
    const imageData = clientSecData.image.childImageSharp.fluid;

    return (
        <ClientSectionWrap {...section}>
            <div className="row align-items-center">
                <div className="col-4 offset-1">
                    <ClientWrap>
                        <ClientLeft>
                       
                            <SectionTitle
                                title={clientSecData.title}
                                subtitle={clientSecData.subtitle}

                            />
        
                        </ClientLeft>
                        <ClientRight>
                            <ClientList>
                                {clients.map((client, i) => (
                                    <Client
                                        key={`client-${i}`}
                                        link={client.node.link}
                                        name={client.node.name}
                                        categorie={client.node.categorie}
                                        client_image={client.node.image.childImageSharp.fluid}                />
                                ))}
                            </ClientList>
                        </ClientRight>
                    </ClientWrap>
                </div>
            </div>
        </ClientSectionWrap>
    )
}

ClientSection.propTypes = {
    paragraph: PropTypes.object
}

ClientSection.defaultProps = {
    section: {
        backgroundColor: '#f8f8f8'
    }
}

export default ClientSection
