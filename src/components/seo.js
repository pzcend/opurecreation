import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
const SEO = ({ title, description, image, pathname, type }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
          type
        },
      },

    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${image || defaultImage}`,
        url: `${siteUrl}${pathname || "/"}`,

      }

    
         var schemaProduct = {
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "création site internet vitrine",
          "image": "https://opurecreation.com/icons/icon-152x152.png",
          "description": "Ce module vous permettra de promouvoir votre activité sur internet de manière simple et efficace. Les différentes catégories vous permettent de présenter une entreprise dans sa globalité ou de rentrer dans les détails d’un produit, d’un service, ou d’une activité plus précise.",
          "brand": {
            "@type": "Brand",
            "name": "O Pure création"
          },
          "sku": "siteInternetVitrine",
          "npm": 'web',
          "author": {
              "@type": "Person",
              "name": "Pierre VIGOUROUX"
          },
          "offers": {
              "@type": "Offer",
              "url": "https://www.opurecreation.com/site-internet-vitrine-plus",

          }

        }



      return (
        <>
          <Helmet title={seo.title} titleTemplate={`%s | ${titleTemplate}`}>
            <html lang="fr" />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            <meta property="og:type" content="website" />
            <meta property="og:image:width" content="400" />
            <meta property="og:image:height" content="300" />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
            {<script type="application/ld+json">
              {JSON.stringify(schemaProduct)}
              </script>}

          </Helmet>
        </>
      )
    }}
  />
)
export default SEO
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: siteUrl
        defaultImage: image
        twitterUsername
        type
      }
    }
  }
`