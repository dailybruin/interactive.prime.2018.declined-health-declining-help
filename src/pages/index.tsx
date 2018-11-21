import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import HoverVideo from '../components/VideoOnClick/VideoOnClick'

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteName
        description
        url
      }
    }
    kerckhoffArticle {
      headline
      author
      content {
        type
        value
      }
    }
  }
`
const IndexPage = ({ data }) => (
  <>
    <Head {...data.site.siteMetadata} />
    <CoverPhoto
      headline={data.kerckhoffArticle.headline}
      authors={data.kerckhoffArticle.author}
      imageURL="https://chancellor.ucla.edu/wp-content/uploads/2018/07/ChancellorBlock_1366x912_acf_cropped.jpg"
      xPosition="start"
      yPosition="center"
    />
    <Article dropcap={true} content={data.kerckhoffArticle.content} />
    <Footer developers="Nathan Smith" copyrightYear={2018} />
    <HoverVideo
      imageURL="https://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg"
      videoURL="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
  </>
)

export default IndexPage
