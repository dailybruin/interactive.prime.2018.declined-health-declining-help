import * as React from 'react'
import { graphql } from 'gatsby'
import { Article, CoverPhoto, Footer, Head } from '@dailybruin/lux'
import Slider from '../components/SlideShowClicker'
import Slider2 from '../components/SlideShowClicker2'

import Slider3 from '../components/SlideShowClicker3'
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
    <Slider2 textArray={['Test 1', 'Test 2', 'Test 3']} />
  </>
)

export default IndexPage
