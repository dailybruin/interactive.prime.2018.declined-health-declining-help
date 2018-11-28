const slugify = require('slugify')

const siteName = 'Declined Health Declining Help'
const description =
  'In Los Angeles, a significant number of deaths in the homeless population occur in individuals who may be unable to help themselves. Read the stories of those who seek a solution in spite of an ethical debate that has left the community gridlocked.'
const image =
  'https://assets.dailybruin.com/images/interactive.prime.2018.teddy/web.prime.homelessness.ADX_2-22751bcd4955eeb69f5d100c928d85fb.JPG'
const year = '2018'

const url = `https://features.dailybruin.com/${year}/${slugify(
  siteName.toLowerCase()
)}`

module.exports = {
  pathPrefix: `/2018/declined-health-declining-help`,
  siteMetadata: {
    siteName: 'Daily Bruin PRIME | ' + siteName,
    description,
    url,
    image,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteName,
        short_name: siteName,
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'browser',
        icon: 'src/images/db-logo.png',
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: '@dailybruin/gatsby-source-kerckhoff',
      options: {
        slug: 'interactive.prime.2018.teddy',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-28181852-23',
        head: false,
        anonymize: true,
      },
    },
  ],
}
