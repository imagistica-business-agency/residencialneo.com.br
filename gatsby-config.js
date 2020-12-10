module.exports = {
  siteMetadata: {
    title: `NEO Residencial`,
    description: `Melhores oportunidades de investimentos mobiliário em Foz do Iguaçu.`,
    author: `VR Investimentos`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-MK63KVZ',
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1640,
              linkImagesToOriginal: false,
              showCaptions: true,
              quality: 80,
              withWebp: true
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Residencial Neo`,
        short_name: `Neo`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `fullscreen`,
        icon: `src/images/icon.png`
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
        htmlTitle: `Gestor de conteúdo`
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -80
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Krona One`
          },
          {
            family: `Rubik`,
            variants: [`400`, `400i`, `500`, `700`]
          }
        ]
      }
    }
  ]
}


