/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "O Pure Creation, développeur Web et Mobile",
    titleTemplate: `Création de site internet à Cognac en Charente et Poitou Charentes`,
    description: `Le savoir faire d'un développeur WEB, vous assure un partenaire efficace pour créer un site internet et un bon référencement naturel en Charente et Nouvelle Aquitaine. O'Pure Création développe des sites vitrine, des E-commerce, des applications Web  réactives.`,
    author: `@OpureCreation`,
    twitterUsername: `@OpureCreation`,
    image: 'bg-image-1.jpg',
    siteUrl: 'https://www.opurecreation.com',
    contact: {
      postal_code: '16200 <br/> NERCILLAC.',
      address: '656 rue de Cognac 16200 NERCILLAC',
      email: 'contact@opurecreation.com',
      company_email: 'contact@opurecreation.com',
      company_address: '656 rue de Cognac 16200 NERCILLAC.',
      phone: '0611793656',
      phone2: '+33611793656',
      social: {
        facebook: 'https://facebook.com/Opure-création-150052568385705',
        twitter: 'https://twitter.com',
        linkedin: 'https://linkedin.com/in/pierre-vigouroux-a6149474',
        dribbble: 'https://dribbble.com'
      }
    },
    copyright: "Pierre VIGOUROUX - O' Pure Création "
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`, 
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `O pure Création`,
        short_name: `O Pure Création`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#001c43`,
        display: `standalone`,
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.opurecreation.com/',
        sitemap: 'https://www.opurecreation.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1920
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            subsets: [`latin`],
            variants: [`300`, `300i`, `400`, `400i`, `500`, `600`, `700`, `900`]
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    }
  ]
}
