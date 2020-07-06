module.exports = {
  siteMetadata: {
    title: `NEO Residencial`,
    description: `Melhores oportunidades de investimentos mobiliário em Foz do Iguaçu.`,
    author: `VR Investimentos`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        // icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Krona One`,
          },
          {
            family: `Rubik`,
            variants: [`400`, `400i`, `500`, `700`],
          },
        ],
      },
    },
  ],
}
